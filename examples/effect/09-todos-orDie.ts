import * as Effect from "@effect/core/io/Effect";
import * as Schedule from "@effect/core/io/Schedule";
import { pipe } from "@tsplus/stdlib/data/Function";
import * as Http from "./04-http";

export interface Todo {
  id: number;
}

export class ParseTodoError {
  readonly _tag = "ParseTodoError";
}

export declare const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>;

export type GetTodoError = Http.FetchError | Http.JsonBodyError | ParseTodoError;

export const getTodo = (id: number) =>
  pipe(
    Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    Effect.flatMap(Http.jsonBody),
    Effect.flatMap(parseTodo),
    Effect.retry(
      pipe(
        Http.defaultRetrySchedule,
        Schedule.whileInput((error: GetTodoError) => error._tag !== "JsonBodyError")
      )
    ),
    Effect.orDie
  );

export const getTodos = (ids: number[]) =>
  pipe(
    Effect.forEachPar(ids, (id) => getTodo(id)),
    Effect.withParallelism(10)
  );
