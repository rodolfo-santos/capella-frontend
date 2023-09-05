# Entities

## Overview

Entities are one of the core concepts in Domain-Driven Design (DDD). They have a distinct identity that runs through time and different states. An entity is defined primarily by its identity, rather than its attributes.

Entities might change over their lifecycle, but the identifier remains consistent. This allows for tracking, even as data changes.

## Principles

1. **Identity**: Every entity should have a unique identity. This identity persists through the lifetime of the entity.
2. **Mutability**: Unlike value objects, entities can change over time. However, their identity remains fixed.
3. **Consistency**: Any rule or invariant related to an entity should be consistent throughout its lifecycle.

## Structure

This folder contains the various entities used within our domain. An entity represents a "thing" in our domain that has continuity and identity – for example, a `User`, `Task`, or `Order`.

Each entity might encapsulate its own behavior (methods) and data (attributes).

## Examples

In a task management system:

- `Task`: Might represent a unit of work to be done. It could have attributes like `title`, `description`, and `status`. It might also have behaviors like `assignUser` or `markAsComplete`.
- `User`: Represents someone who can create, modify, or be assigned a task.

## Note

Always ensure that the identity of an entity remains consistent, even if its attributes change. This is crucial for tracking and maintaining the integrity of data in the system.
