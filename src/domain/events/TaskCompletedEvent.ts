import type { TaskEntity } from '../entities/TaskEntity'

export class TaskCompletedEvent {
  taskId: TaskEntity['id']
  dateTime: Date

  constructor(taskId: TaskEntity['id']) {
    this.taskId = taskId
    this.dateTime = new Date()
  }
}
