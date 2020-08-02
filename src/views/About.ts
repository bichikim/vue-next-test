import { h, defineComponent } from 'vue'

export interface AboutProps {
  msg?: string
}

export default defineComponent<AboutProps>((props, ctx) => {
  const { msg } = props
  const { attrs } = ctx
  console.log(attrs)
  return () => (
    h('span', msg + 'foo')
  )
})
