export abstract class ValueObject<T> {
  constructor(init: T) {
    Object.assign(this, init)
  }
}
