/**
 * 模拟 Thread.sleep()
 *
 * @param time 延时时长
 */
export const sleep = (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(0)
    }, time * 1000)
  })
}
