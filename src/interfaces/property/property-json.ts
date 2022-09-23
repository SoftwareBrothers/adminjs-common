/* eslint-disable no-use-before-define */
import { PropertyType } from './property-type'

export type PropertyPlace = 'show' | 'list' | 'edit' | 'filter';

/**
 * JSON representation of a Property.
 * @subcategory Frontend
 */
export interface PropertyJSON {
  /**
   * If given property should be treated as a title
   */
  isTitle: boolean;
  /**
   * If given property should be treated as a Id field
   */
  isId: boolean;
  /**
   * Property position on a list
   */
  position: number;
  /**
   * If property is sortable
   */
  isSortable: boolean;
  /**
   * If property has restricted number of values
   */
  availableValues: Array<{label: string; value: string | number}> | null;
  /**
   * Property unique name
   */
  name: string;
  /**
   * Property unique path. For top level properties - the same as name, but for nested
   * properties it is separated with dot notation: `nested.property`
   */
  propertyPath: string;
  /**
   * Path of the actual value inside the record. It is usually the same as propertyPath, with the
   * exception of array values.
   */
  path: string;
  /**
   * One of {@link PropertyType}s
   */
  type: PropertyType;
  /**
   * Has a name of a resource to which it is a reference.
   * For instance property `userId` will have here `Users`
   */
  reference: string | null;
  /**
   * Indicates if property is an array of properties
   */
  isArray: boolean;
  /**
   * Contain list of all sub properties.
   * This is the case for nested schemas in MongoDB.
   */
  subProperties: Array<BasePropertyJSON>;
  /**
   * Whether the field should be disabled in edition
   */
  isDisabled: boolean;
  /**
   * Whether the field should be marked as required (with a star)
   */
  isRequired: boolean;
  /**
   * Resource to which given property belongs
   */
  resourceId: string;
  /**
   * Indicates if given property has been created in AdminJS {@link PropertyOptions} and hasn't
   * been returned by the database adapter.
   * @new in version 3.3
   */
  isVirtual: boolean;
}

export type BasePropertyJSON = Omit<PropertyJSON, 'path'>

/**
 * Property without the path. Defined as `Omit<PropertyJSON, 'path'>`
 *
 * @typedef {Object} BasePropertyJSON
 * @property {any} ...   properties from {@link PropertyJSON} except `path`
 * @alias BasePropertyJSON
 * @memberof PropertyJSON
 */
