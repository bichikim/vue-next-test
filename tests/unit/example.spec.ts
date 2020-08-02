import { expect } from 'chai'
import { Store } from '@/lib/vare/Store'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const store = new Store({
      foo: 'foo',
    })

    const state = store.state

    const setFoo = store.mutation((foo: string) => {
      state.foo = foo
    }, 'setFoo')

    const _updateFoo = (foo: string) => {
      setFoo(foo)
    }

    const updateFoo = store.action(_updateFoo, 'updateFoo')

    let subscribeResult: Record<any, any> = {}
    let count = 0

    const _subscribe = (name: string, args: any, action: any, wrappedAction: any) => {
      subscribeResult = { name, args, action, wrappedAction }
      count += 1
    }

    store.subscribeAction(_subscribe)

    updateFoo('bar')

    expect(subscribeResult.name).to.equal('updateFoo')
    expect(subscribeResult.args[0]).to.equal('bar')
    expect(subscribeResult.action).to.equal(_updateFoo)
    expect(subscribeResult.wrappedAction).to.equal(updateFoo)
    expect(count).to.equal(1)

    store.unsubscribeAction(_subscribe)

    updateFoo('foo')

    expect(subscribeResult.name).to.equal('updateFoo')
    expect(subscribeResult.args[0]).to.equal('bar')
    expect(subscribeResult.action).to.equal(_updateFoo)
    expect(subscribeResult.wrappedAction).to.equal(updateFoo)
    expect(count).to.equal(1)
  })
})
