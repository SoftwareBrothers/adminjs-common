import { NoticeMessage } from '../notice'
import { RecordJSON } from '../record'

export type RecordActionResponse = ActionResponse & {
  /**
   * Record object.
   */
  record: RecordJSON;
}

export type BulkActionResponse = ActionResponse & {
  /**
   * Array of RecordJSON objects.
   */
  records: Array<RecordJSON>;
}

export type ActionResponse = {
  /**
   * Notice message which should be presented to the end user after showing the action
   */
  notice?: NoticeMessage;
  /**
   * redirect path
   */
  redirectUrl?: string;
  /**
   * Any other custom parameter
   */
  [key: string]: any;
}

export type ListActionResponse = ActionResponse & {
  /**
   * Paginated collection of records
   */
  records: Array<RecordJSON>;
  /**
   * Pagination metadata
   */
  meta: {
    page: number;
    perPage: number;
    direction: 'asc' | 'desc';
    sortBy: string;
    total: number;
  };
}

export type SearchActionResponse = ActionResponse & {
  /**
   * List of records
   */
  records: Array<RecordJSON>;
}
