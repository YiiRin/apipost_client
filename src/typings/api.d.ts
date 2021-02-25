import { GlobalBodyItem } from './body'
import { GlobalHeaderItem } from './header'
import { GlobalQueryItem } from './query'

export interface Description {
  /** 要描述的参数名 */
  key: string
  /** 要描述的内容 */
  description: string
}

export interface EnviromentVariable {
  /** 变量名 */
  key: string
  /** 变量初始值 */
  initialVal: string
  /** 变量当前值 */
  currentVal: string
}

export interface Enviroment {
  name: string
  /** 预定义的变量 */
  preDefinedVars?: EnviromentVariable[]
  /** 临时变量 */
  tempVars?: EnviromentVariable[]
  /** 全局变量 */
  globalVars?: EnviromentVariable[]
}

export interface ApiProject {
  /** id */
  _id: string

  /** Api 项目名 */
  name: string

  header?: GlobalHeaderItem[]

  query?: GlobalQueryItem[]

  body?: GlobalBodyItem[]

  descriptionLib?: Description[]

  env?: {
    envs: Enviroment[]
    currentEnv: string | null
  }
}
