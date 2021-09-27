declare module "*.json" {
  const value: any;
  export default value;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__? : any
  }
}