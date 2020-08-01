import { Ref, UnwrapRef, reactive } from '@vue/reactivity'

function _triggerDevToolAction (name: string, ...args: any[]) {
  if (process.env.NODE_ENV === 'development') {
    console.log('action', name, ...args)
  }
}

function _triggerDevToolMutation (name: string, ...args: any[]) {
  if (process.env.NODE_ENV === 'development') {
    console.log('mutation', name, ...args)
  }
}

export class Store<T extends object> {
  private _state: T extends Ref ? T : UnwrapRef<T>

  constructor (state: T) {
    this._state = reactive(state)
  }

  mutation<T extends Function> (mutation: T, name = 'unknown'): T {
    return ((...args: any[]) => {
      _triggerDevToolMutation(name, ...args)
      return mutation(...args)
    }) as any
  }

  action<T extends Function> (action: T, name: string = 'unknown'): T {
    return ((...args: any[]) => {
      this._callAllSubscribe()
      _triggerDevToolAction(name, ...args)
      return action(...args)
    }) as any
  }

  private _callAllSubscribe () {

  }

  get state () {
    return this._state
  }

  subscribe () {

  }
}
