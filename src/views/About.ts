import {h, defineComponent, computed, ref, watchEffect} from 'vue'
import {state, setName} from '@/store'

export interface AboutProps {
  msg?: string
}

export interface FooProps {
  count?: number
}

export const Foo = defineComponent({
  props: {
    count: Number,
  },
  setup: (props, ctx) => {
    const countRef = ref(props.count ?? 0)

    watchEffect(() => {
      countRef.value = props.count ?? 0
    })

    return () => (
      h('div', [
        h('span', countRef.value),
        h('button', {onclick: () => (countRef.value += 1)}, 'up - inside'),
      ])
    )
  },
})

export default defineComponent<AboutProps>((props, ctx) => {
  const name = computed(() => state.name)
  const count = ref(1)
  console.log(count.value)
  return () => (
    h('div', [
      h('span', name.value),
      h('button', {onclick: () => setName('bar')}, 'click'),
      h('button', {onclick: () => (count.value += 1)}, 'up'),
      h('span', count.value),
      h(Foo, {count: count.value}),
    ])
  )
})
