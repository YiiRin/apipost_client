declare interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}

declare interface NodeModule {
    hot?: { accept: (path: string, callback: () => void) => void }
}

declare module "*.ttf" {
    const src: string
    export default src
}

declare module "*.otf" {
    const src: string
    export default src
}

declare module "*.woff" {
    const src: string
    export default src
}

declare module "*.woff2" {
    const src: string
    export default src
}