import type { TaskEntity } from '../entities/TaskEntity'

// TaskNotFoundException.js
export class TaskNotFoundException extends Error {
  constructor(taskId: TaskEntity['id']) {
    super(`Task with ID ${taskId} not found.`)
    this.name = 'TaskNotFoundException'
  }
}
