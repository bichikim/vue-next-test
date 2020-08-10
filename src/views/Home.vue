<template>
  <div class="home">
    <div>{{name}}</div>
    <div>{{deepName}}</div>
    <button @click="() => setName('bar')">change</button>
    <button @click="() => setDeepName('bar')">change</button>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {state, setName, setDeepName} from '@/store'

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
  },
})
</script>
