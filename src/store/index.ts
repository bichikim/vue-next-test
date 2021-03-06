import {createStore} from '@/lib/vare/Store'

const store = createStore({
  name: 'foo',
  deep: {
    name: 'foo',
  },
})

export const state = store.state

export const setName = store.mutation((name: string) => {
  state.name = name
})

export const setDeepName = store.mutation((name: string) => {
  state.deep.name = name
})

export const updateName = store.action((name: string) => {
  setName(name)
})
