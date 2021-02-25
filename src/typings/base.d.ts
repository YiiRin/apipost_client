export interface ParamItem {
  /**字段 key */
  key: string

  /** 字段 value */
  value: string

  /** 字段 描述 */
  description?: string

  /** 是否使用这个字段 */
  disabled?: boolean
}