export class TaskEntity {
  id: number
  title: string
  description: string
  isDone: boolean

  constructor(id: number, title: string, description: string = '', isDone: boolean = false) {
    this.id = id
    this.title = title
    this.description = description
    this.isDone = isDone
  }

  markAsDone() {
    this.isDone = true
  }

  markAsPending() {
    this.isDone = false
  }
}
