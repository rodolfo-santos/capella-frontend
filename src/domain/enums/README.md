# Enums

## Overview

Enums, short for "enumerations," are a way to represent a fixed set of named constants in the domain. They are particularly useful to represent categories, statuses, or any set of values where you expect only a limited set of options.

## Principles

1. **Explicitness**: Enums make the code more readable and descriptive by assigning meaningful names to sets of related numeric or string values.
2. **Safety**: By using enums, you reduce the risk of invalid values being used in the system.
3. **Consistency**: Ensuring that a value must be one from a predefined list can help maintain data integrity.

## Structure

Inside this folder, you will find various enumerations used throughout our domain. Each enum file represents a set of related values. For example, in a task management system, you might have a `TaskStatus` enum to represent the different stages a task might be in (`PENDING`, `IN_PROGRESS`, `COMPLETED`, etc.).

## Examples

- `TaskStatus`: Could represent the different statuses a task can have.
- `UserRole`: Might represent different roles a user can hold in a system, like `ADMIN`, `USER`, or `GUEST`.

## Note

It's important to keep enums up-to-date with the domain's needs. If new categories or statuses emerge, the relevant enum should be updated accordingly. At the same time, be cautious about removing or changing existing values to avoid data inconsistencies.
