<template>
  <div>
    {{ int }}
    <button @click="run">
      run
    </button>
    <button @click="test">
      test
    </button>
    {{ state.a }}
    {{ state.b }}
    {{ state.c }}
    {{ state.a1 }}
    {{ state.b1 }}
    {{ state.c1 }}
  </div>
</template>

<script>
  import { reactive } from 'vue'
  import { smallestInt, testUtil, smallestPositiveInt } from '../utils/smallestInterger'
  export default {
    setup(){
      const int = [-1, 0, 1, 4, 3, 5, 6, 7]
      const intA = [-1, 0]
      const intB = [-1, -2]
      const state = reactive({
        a: null,
        b: null,
        c: null,
        a1: null,
        b1: null,
        c1: null
      })
      const test = () => {
        testUtil(smallestInt(int), 2)
        testUtil(smallestInt(intA), 1)
        testUtil(smallestInt(intB), 1)
        testUtil(smallestPositiveInt(int), 2)
      }
      const run = () => {
        console.time()
        state.a = smallestInt(int)
        state.b = smallestInt(intA)
        state.c = smallestInt(intB)
        console.timeEnd()
        console.time()
        state.a1 = smallestInt(int)
        state.b1 = smallestInt(intA)
        state.c1 = smallestInt(intB)
        console.timeEnd()
      }
      return { run, state, int, test }
    }
  }
</script>

<style lang="scss" scoped>

</style>