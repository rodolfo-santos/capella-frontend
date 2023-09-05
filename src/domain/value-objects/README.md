# Value Objects

## Overview

Value Objects are one of the core building blocks in Domain-Driven Design (DDD). They represent descriptive aspects of the domain with no conceptual identity, often encapsulating attributes and related behavior.

## Principles

1. **Immutability**: Value objects should be immutable. Once they are created, their state should not change.
2. **Equality**: Value objects are equal when their attributes are equal, not based on identity.
3. **Self-validation**: A value object ensures the correctness of its state upon creation.

## Structure

This directory contains various value objects used in our domain. Unlike entities, value objects don't have a unique identifier that runs through time. Instead, they represent descriptive characteristics of the domain, like `TaskDescription`, `UserEmail`, or `DateRange`.

## Usage

Value objects can be used to enforce domain logic, encapsulate complex validation rules, or simplify complex calculations. They ensure that data is always in a valid state, reducing the likelihood of bugs and simplifying domain logic.

## Examples

- `TaskDescription`: A value object representing the details of a task. It ensures that the description is not empty and may have a maximum length.
- `UserEmail`: Ensures that the provided email is in a valid format.

## Note

When designing value objects, focus on the domain's rules and invariants. Ensure that value objects are small, cohesive, and centered around a single concept. This approach ensures that they remain maintainable, reusable, and in line with the domain's realities.
