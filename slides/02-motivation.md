---
layout: center
---

# What is a Language?

---
layout: center
---

## From Wikipedia

A language is a **structured system** of communication. The structure of a language is its **grammar** and the free components are its **vocabulary**.

Human languages differ from animal communication systems in that they employ **grammatical and semantic categories**, such as noun and verb, present and past, which may be used to express **exceedingly complex meanings**.

---
layout: center
---

# If a sentence is grammatically correct, does it make sense?

---
layout: center
---

# Time flies like an arrow; fruit flies like a banana.

---
layout: center
---

# Type Checking English

## <u>Time flies</u> like an arrow; <u>fruit flies</u> like a banana.

Error: <u>Fly</u> cannot be applied to <u>Time</u>

Error: <u>Fly</u> cannot be applied to <u>Fruit</u>

---
layout: center
---

# Can we Type-Check JavaScript?

---
layout: center
---

# Can we Type-Check JavaScript?
## Kind of.. In some simple cases, yes.

<br />

```ts twoslash
// @errors: 2469
const hello = "hello"
const world = "world"
const sentence = hello + world + Symbol.for("ok")
```

---
layout: center
---

# How would we Type-Check the following?

```ts
function sum(a, b) {
    return a + b
}
```

Without knowing something about `a` and `b` there isn't much we can say...

---
layout: center
---

# Welcome to TypeScript

## TypeScript extends the JavaScript grammar to support type definitions

<br />

```ts twoslash
function sum(a: number, b: number) {
    return a + b
}
```

Now the TS compiler knows that `a` and `b` are numbers and can safely check that `+` is valid between numbers.

```ts twoslash
// @errors: 2345
function sum(a: number, b: number) {
    return a + b
}
// ---cut---
sum(2, 3)
sum(2, "not good")
```

It can even check call sites notifying us about wrong function invocations.

---
layout: center
---

# How Expressive is TypeScript's Type-System?

## Amazing to say, a lot. One of the most expressive.

Namely TypeScript has:

- Primitive types (string, number, symbol, object, record, etc)
- Literal types (string literals, number literals)
- Template literal types (literals intertwined with types)
- Union types (A | B)
- Intersection types (A & B)
- Conditional types (if P then X else Y)
- Generic types, with variance

---
layout: center
---

# A powerful example, ADTs

```ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })
```

---
layout: center
---

# Using ADTs

```ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

const mapResult = <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        case "Failure": {
            return failure(result.failure)
        }
    }
}

const program = mapResult(success("hello"), (s) => `${s} world`)
```

---
layout: center
---

# Exhaustive Matching

```ts twoslash
// @errors: 2345
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

const absurd = (_: never): never => {
    throw new Error("Bug!")
}

const mapResult = <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        default: {
            return absurd(result)
        }
    }
}
```

---
layout: center
---

# Pipeable APIs

```ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

declare function pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D
declare function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C
declare function pipe<A, B>(a: A, ab: (a: A) => B): B
declare function pipe<A>(a: A): A

const mapResult = <A, B>(f: (a: A) => B) => <E>(result: Result<E, A>): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        case "Failure": {
            return failure(result.failure)
        }
    }
}

const program = pipe(
    success("hello"),
    mapResult((s) => `${s} world`),
    mapResult((s) => `${s} nice!`),
    mapResult((s) => s.length)
)
```
