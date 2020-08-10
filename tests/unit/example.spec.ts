import {expect} from 'chai'
import {Store} from '@/lib/vare/Store'

describe('store', () => {
  it('should do action and mutation with subscribe', () => {
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

    let subscribeActionResult: Record<any, any> = {}
    let subscribeResult: Record<any, any> = {}
    let countAction = 0
    let count = 0

    const _subscribeAction = (name: string, args: any, action: any, wrappedAction: any) => {
      subscribeActionResult = {name, args, action, wrappedAction}
      countAction += 1
    }

    const _subscribe = (name: string, args: any, action: any, wrapper: any) => {
      subscribeResult = {name, args, action, wrapper}
      count += 1
    }

    store.subscribeAction(_subscribeAction)
    store.subscribe(_subscribe)

    updateFoo('bar')

    expect(subscribeActionResult.name).to.equal('updateFoo')
    expect(subscribeActionResult.args[0]).to.equal('bar')
    expect(subscribeActionResult.action).to.equal(_updateFoo)
    expect(subscribeActionResult.wrappedAction).to.equal(updateFoo)
    expect(countAction).to.equal(1)
    expect(count).to.equal(1)
    expect(state.foo).to.equal('bar')

    expect(subscribeResult.name).to.equal('setFoo')
    expect(subscribeResult.args[0]).to.equal('bar')

    store.unsubscribeAction(_subscribeAction)
    store.unsubscribe(_subscribe)

    updateFoo('foo')

    expect(subscribeActionResult.name).to.equal('updateFoo')
    expect(subscribeActionResult.args[0]).to.equal('bar')
    expect(subscribeActionResult.action).to.equal(_updateFoo)
    expect(subscribeActionResult.wrappedAction).to.equal(updateFoo)
    expect(countAction).to.equal(1)
    expect(count).to.equal(1)
    expect(state.foo).to.equal('foo')
  })
})
