type PropsWithChildren<T = any> = T & {
  children?: any;
  [key: string]: any;
}

/**
 * It is generated from {@link Array<LayoutElement>} passed in {@link Action#layout}
 *
 * @alias ParsedLayoutElement
 * @memberof ActionJSON
 */
export type ParsedLayoutElement = {
  /** List of paths to properties which should be rendered by given element */
  properties: Array<string>;
  /** props passed to React component which wraps elements */
  props: PropsWithChildren<any>;
  /** Nested layout elements */
  layoutElements: Array<ParsedLayoutElement>;
  /** Component which should be used as a wrapper */
  component: string;
}
