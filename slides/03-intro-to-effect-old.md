---
layout: full
---

# Tracing

We are currently integrating with OpenTelemetry via the ecosystem package `@effect/otel` but we are working on a native representation of spans and tracing following the same principles applied for `Metrics`

```ts
import { Effect, pipe } from "./common";
import * as Todos from "./todos";

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.withSpanAttribute("id", id),
  Effect.withSpan("GetTodo")
)

export const getTodos = (ids: number[]) => pipe(
  Todos.getTodos(ids),
  Effect.withSpanAttribute("ids", ids),
  Effect.withSpan("GetTodos")
)
```

Note: This isn't yet ready but we are actively working on it! for the time being you'll find `withSpan` in the otel ecosystem package.

---
layout: full
---

# Dependency Injection

Effect has native support for Context propagation, think of it like the React context on type-safe steroids.

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
// ---cut---
import { Effect, Chunk } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(() => `todo: ${JSON.stringify(todo)}`))
  }
  
  return Chunk.size(todos)
})
```

---
layout: full
---

# Dependency Injection

Running a program requires all dependencies to be provided into the Context, a smart way of constructing dependency trees of potentially interdependent services is by using `Layer`

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(() => `todo: ${JSON.stringify(todo)}`))
  }

  return Chunk.size(todos)
})

// ---cut---

import * as Layer from "@effect/core/io/Layer"
import * as Impl from "./todos-impl";

export const LiveTodoRepo = Layer.fromEffect(TodoRepo, () => 
  Effect.succeed(() => ({
    getTodo: Impl.getTodo,
    getTodos: Impl.getTodos
  }))
)

export const main = pipe(
  program,
  Effect.provideSomeLayer(LiveTodoRepo)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(`Unexpected failure: ${JSON.stringify(exit.cause)}`)
  }
})
```

---
layout: full
---

# Dependency Injection

Layers represents modules of your application and they compose very well, you could imagine having a service `TodoRepo` which constructors depends on `Http` and we have a program that uses both `TodoRepo | Http`

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, Http as HttpImpl, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export interface Http {
  readonly request: typeof HttpImpl.request
}

export const Http = Tag<Http>()

// ---cut---

import * as Layer from "@effect/core/io/Layer"

export declare const LiveHttp: Layer.Layer<never, never, Http>
export declare const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>

export const AppContext = pipe(
  LiveHttp,
  Layer.andTo(LiveTodoRepo)
)

export declare const program: Effect.Effect<Http | TodoRepo, never, void>

export const main = pipe(
  program,
  Effect.provideSomeLayer(AppContext)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(`Unexpected failure: ${JSON.stringify(exit.cause)}`)
  }
})
```

---
layout: center
---

# Recap!

we've been only scratching the surface of Effect and a lot of its power hasn't made it to this presentation but we've seen how to deal with:

<v-clicks>

- Errors
- Retries
- Concurrency
- Interruption
- Logging
- Tracing
- Metrics
- Dependencies

</v-clicks>

---
layout: full
---

# What's in the Box?

When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in `@effect/core` you'll find:

<v-clicks>

- Effect: Generic Program Definition
- Cause: Representing potentially multiple failure causes of different kinds
- Scope: Safe Resource Management to model things like database connections
- Fiber: Low Level Concurrency Primitives
- Queue: Work-Stealing Concurrent & Backpressured Queues
- Hub: Like a Pub/Sub for Effects
- Layer: Context Construction
- Metrics: Prometheus Compatible Metrics
- Tracing: OpenTelemetry Compatible Tracing

</v-clicks>

---
layout: full
---

# What's in the Box?

When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in `@effect/core` you'll find:

<v-clicks>

- Logger: Multi-Level & Abstract Logger
- Ref: Mutable Reference to immutable State with potentially Syncronized access and updates
- Schedule: Time-based Scheduling Policies
- Stream: Pull Based Effectful Streams (like an Effect that can produce 0 - infinite values)
- Deferred: Like a Promise of an Effect that may be fulfilled at a later point
- STM: Transactional Data Structures & Coordination 
- Semaphore: Concurrency Control
- Clock: System Clock & Time Utilities
- Random: Deterministic Seeded Random Utilities
- Runtime: Runtime Configuration and Runner
- Supervisor: Fiber Monitoring

</v-clicks>

---
layout: full
---

<style>
  img {
    max-width: 50% !important;
  }
</style>

# Early adopters feedback

<br />

![Imgur](https://i.imgur.com/ZUKacox.png)

---
layout: center
---

# Thank you!

Where to go next?

Slides at [Github](https://github.com/mikearnaldi/pirum-meetup-09-2022)

Check out our [Website](https://www.effect.website/) 

Join our [Discord](https://discord.gg/cWtHKdAXwC) Community

Follow us on [YouTube](https://www.youtube.com/channel/UC8wNHsXmEuoikbwRdLeoJQg) for [Effect Time](https://www.youtube.com/playlist?list=PLDf3uQLaK2B8kVv0PS1bwMwzENHpq48Ox)

Follow us on Twitter: [Effect](https://twitter.com/effectTS_), [Me](https://twitter.com/MichaelArnaldi), [MATECHS](https://twitter.com/matechsdigital)
