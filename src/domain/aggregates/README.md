# Aggregates

## Overview

Aggregates are a core tactical pattern in Domain-Driven Design (DDD). They ensure data change consistency by grouping a set of related entities. An aggregate has a root entity which is the only entity of the aggregate that external objects can hold references to.

Aggregates are treated as a single unit for data changes. Any business rule or invariant spanning multiple entities is enforced here.

## Principles

1. **Root Entity**: Each aggregate has a primary entity, known as the "Root Entity". All external interactions with an aggregate are channeled through this root entity.
2. **Consistency**: Aggregates ensure that they are always in a consistent state and never let their internal state become invalid.
3. **Isolation**: External objects should not reference inner entities of an aggregate directly. They should only reference the root entity.

## Structure

Inside this folder, you will find directories representing different aggregates in our domain. Each directory might contain the root entity and other entities or value objects that make up the aggregate.

For example, in a task management system, there might be an aggregate for `Task` that encompasses the `Task` itself (as a root entity) and other related entities or value objects like `Subtask`, `TaskHistory`, etc.

## Note

Whenever creating or modifying an aggregate, always bear in mind the business rules and invariants that need to be upheld and enforce them within the aggregate itself.
