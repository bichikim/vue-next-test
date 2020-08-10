import {h, defineComponent, Fragment, computed} from 'vue'
import {state, setName, setDeepName} from '@/store'

export interface AboutProps {
  msg?: string
}

export default defineComponent<AboutProps>((props, ctx) => {
  const name = computed(() => state.name)
  return () => (
    h('div',
      h(Fragment, [
        h('span', name.value),
        h('button', {onclick: () => setName('bar')}, 'click'),
      ]),
    )
  )
})
