import { defineComponent, ref, computed, reactive } from 'vue'
import { Store } from '@/lib/Store'

const store = new Store({
  name: 'foo',
  deep: {
    name: 'foo',
  },
})

const state = store.state

export const setName = store.mutation((name: string) => {
  state.name = name
})

export const setDeepName = (name: string) => {
  state.deep.name = name
}
