/**
 * Error which is thrown when an abstract method is not implemented
 *
 * @category Errors
 */
export class NotImplementedError extends Error {
  /**
   * @param   {string}  fnName  name of the function, base on which error will
   * print on the output link to the method documentation.
   */
  constructor(fnName: string) {
    const message = `
    You have to implement the method: ${fnName}
    `
    super(message)
    this.message = message
  }
}

export default NotImplementedError
