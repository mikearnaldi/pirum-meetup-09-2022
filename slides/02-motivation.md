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
