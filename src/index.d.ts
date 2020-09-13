declare module '*.vue' {
  import {defineComponent, Component} from 'vue'
  const component: ReturnType<typeof defineComponent>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  export default component
}
