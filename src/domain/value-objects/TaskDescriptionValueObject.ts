// TaskDescriptionValueObject.js
export class TaskDescriptionValueObject {
  value = ''

  constructor(value: string) {
    if (value.length > 255) {
      throw new Error('Task description is too long.')
    }
    this.value = value
  }

  toString() {
    return this.value
  }
}
