# Application Layer

## Overview

The Application layer, also known as the service layer or use-cases layer, contains the high-level business logic. This layer orchestrates the execution of specific application operations, interacting with both the domain and the infrastructure layers.

## Responsibilities

1. **Orchestration of Use Cases**: Executes specific operations that users can perform in the application, such as creating a task, authenticating a user, and more.
2. **Mediator between Domain and Infrastructure**: The application layer shouldn't contain core business logic, but should call upon the domain layer for that logic and the infrastructure layer for persistence operations or external services.
3. **Transaction Management**: If there are operations involving multiple steps that require transaction management, that responsibility also resides here.

## Directory Structure

- **/use-cases**: Contains the main application use cases or services. Each sub-directory or file represents a specific operation or a related set of operations.

## Example

Considering a "create task" feature:

1. An endpoint or UI action triggers a service or use case in the application layer.
2. The application layer validates and orchestrates the operation, possibly calling on several entities or aggregates in the domain layer.
3. If everything is correct, the application layer requests the infrastructure layer to persist the new task in the database.
