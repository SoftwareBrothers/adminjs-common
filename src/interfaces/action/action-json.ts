/**
 * JSON representation of an {@link Action}
 * @see Action
 * @subcategory Frontend
 */
export interface ActionJSON {
  /**
   * Unique action name
   */
  name: string;
  /**
   * Type of an action
   */
  actionType: 'record' | 'resource' | 'bulk';
  /**
   * Id of a resource to which given action belongs.
   */
  resourceId: string;
  /**
   * Indicates if action has action handler defined
   */
  hasHandler: boolean;
}
