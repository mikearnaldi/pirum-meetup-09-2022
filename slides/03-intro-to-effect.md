---
layout: center
---

# Taking TypeScript to it's limits (and beyond)

---
layout: center
---

# Welcome to Effect

## A fiber-based, structured concurrency primitive for general purpose programming with type safe requirements and errors

---
layout: full
---

# Creating a `fetch` wrapper

```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as Eff from "@effect/core/io/Effect";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  Eff.tryCatchPromise(
    () => fetch(input, init),
    (error) => new FetchError(error)
  );

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  Eff.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );
```

---
layout: full
---

# Using the `fetch` wrapper

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http, pipe } from "./common";

export const getTodo = (id: number) =>
  pipe(
    Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    Effect.flatMap(Http.jsonBody)
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo)) 
```

Looking at the types inferred from TS we can explicitely see `getTodo` may returns: 

```ts
Effect<never, FetchError | JsonBodyError, Chunk<unknown>>
```

Which can be read as: **one operation that has no requirements, and when performed may fail for either a FetchError or for a JsonBodyError and when succesful returns unknown**

---
layout: full
---

# Composing further

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Effect, Http, pipe } from "./common";

// ---cut---
export interface Todo { id: number }

export class ParseTodoError { readonly _tag = "ParseTodoError" }

export declare const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>

export const getTodo = (id: number) =>
  pipe(
    Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    Effect.flatMap(Http.jsonBody),
    Effect.flatMap(parseTodo),
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo)) 
```

Looking at the types inferred from TS we can explicitely see `getTodo` may returns: 

```ts
Effect<never, FetchError | JsonBodyError | ParseTodoError, Chunk<Todo>>
```

---
layout: full
---

# Handling Errors

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Effect, Http, pipe, Chunk } from "./common";

// ---cut---
export interface Todo { id: number }

export class ParseTodoError { readonly _tag = "ParseTodoError" }

export declare const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>

export const getTodo = (id: number) =>
  pipe(
    Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    Effect.flatMap(Http.jsonBody),
    Effect.flatMap(parseTodo),
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo))

export const getTodosWhenPossible = 
  (ids: number[]): Effect.Effect<never, Http.JsonBodyError | ParseTodoError, Chunk.Chunk<Todo>> => 
    pipe(
      ids, 
      getTodos,
      Effect.catchTag("FetchError", () => Effect.succeed(Chunk.empty()))
    )
```

---
layout: full
---

# Resilience on failures

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Schedule, Effect, Http, Duration, pipe } from "./common";

export type HttpError = Http.JsonBodyError | Http.FetchError

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30))),
  Schedule.whileInput((error: HttpError) => error._tag !== "JsonBodyError")
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(retrySchedule)
  );
```

Note how the default schedule is composed with `Schedule.whileInput` in order to refine its behaviour.

---
layout: full
---

# Failure escalation

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Schedule, Effect, Http, Duration, pipe } from "./common";
// ---cut---

export type HttpError = Http.JsonBodyError | Http.FetchError

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30))),
  Schedule.whileInput((error: HttpError) => error._tag !== "JsonBodyError")
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(retrySchedule),
    Effect.orDie
  );
```

We can see by looking at the types that the error type has now disappeared. You can recover from ALL failures including defects by using functions like `Effect.catchAllCause` or turn the error into a full `Cause<E>` using `Effect.sandbox`.

---
layout: full
---

# Interruption

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}
// ---cut---
import * as Effect from "@effect/core/io/Effect";
import * as Either from "@tsplus/stdlib/data/Either";

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  Effect.asyncInterrupt<never, FetchError, Response>((resume) => {
    const controller = new AbortController();
    fetch(input, { ...(init ?? {}), signal: controller.signal }).then((response) => {
      resume(Effect.succeed(response));
    }).catch((error) => {
      resume(Effect.failSync(() => new FetchError(error)));
    });
    return Either.left(Effect.sync(() => {
      controller.abort();
    }));
  });
```

Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.

That's it interruption is propagated through program execution without explicitly passing signals or controllers.

---
layout: center
---

<center>

# Thank you!

Where to go next?

<qr-slides />

[Slides Code](https://github.com/mikearnaldi/pirum-meetup-09-2022) [Website](https://www.effect.website/) [Discord Community](https://discord.gg/cWtHKdAXwC)

</center>
