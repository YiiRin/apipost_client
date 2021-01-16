export const localStore = {
  /**
   * 获得指定 key 的数据,自动 json 解码
   *
   * @param {string} key key
   */
  get<T>(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value) as T
    }
    return null
  },

  /**
   * 将值存储到 localstorage 中，自动 json 编码
   *
   * @param {string} key key
   * @param {any} value 值
   */
  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  /**
   * 删除存储的 key
   *
   * @param {string} key key
   */
  remove(key: string) {
    window.localStorage.removeItem(key)
  },

  /**
   * 批量删除 localStorage 中的内容
   *
   * @param keys 键
   */
  removeMany(...keys: string[]) {
    console.log('remove many')

    keys.forEach((key) => window.localStorage.removeItem(key))
  },

  /**
   * 删除所有 localStorage 中的内容
   */
  removeAll() {
    window.localStorage.clear()
  },
}
