import buildDocumentationUrl from './utils/build-docs-url'

/**
 * Error which is thrown when user messed up something in the configuration
 *
 * @category Errors
 */
export class ConfigurationError extends Error {
  /**
   * @param   {string}  fnName  name of the function, base on which error will
   * print on the output link to the method documentation.
   * @param {string} message
   */
  constructor(message, fnName) {
    const msg = `
    ${message}
    More information can be found at: ${buildDocumentationUrl(fnName)}
    `
    super(msg)
    this.message = msg
    this.name = 'ConfigurationError'
  }
}

export default ConfigurationError
