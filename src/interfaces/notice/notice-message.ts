/**
 * NoticeMessage which can be presented as a "Toast" message.
 * @alias NoticeMessage
 * @memberof withNotice
 */
export type NoticeMessage = {
  message: string;
  type?: 'success' | 'error';
}
