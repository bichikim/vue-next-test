<template>
  <div class="home">
    <div>{{name}}</div>
    <div>{{deepName}}</div>
    <button @click="() => setName(name + '1')">change</button>
    <button @click="() => setDeepName(deepName + '1')">change</button>
    <hello-world></hello-world>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {state, setName, setDeepName} from '@/store'
import HelloWorld from '@/components/HelloWorld'

export default defineComponent({
  name: 'Home',
  setup(props) {
    const name = computed(() => (state.name))
    const deepName = computed(() => (state.deep.name))
    return {
      name,
      deepName,
      setName,
      setDeepName,
    }
  },
  components: {
    HelloWorld,
  },
})
</script>
