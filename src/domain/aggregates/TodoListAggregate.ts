import type { TaskEntity } from '../entities/TaskEntity'

export class TodoListAggregate {
  id: number
  tasks: TaskEntity[]

  constructor(id: number, tasks: TaskEntity[] = []) {
    this.id = id
    this.tasks = tasks
  }

  addTask(task: TaskEntity) {
    this.tasks.push(task)
  }

  removeTask(taskId: TaskEntity['id']) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId)
  }
}
