<template>
  <div class="page">
    <div
      ref="observeRef"
      class="observe-me"
    >
      Okay
    </div>
    <div
      ref="observeRef2"
      class="observe-me-2"
    >
      Okay
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted} from 'vue'
import {createObserver, buildThresholds} from './composables/useIntersectionObserver'


export default defineComponent({
  name: 'App',
  setup() {
    const observeRef = ref(null)
    const observeRef2 = ref(null)
    const thresholds = buildThresholds()
    const options = {
      root: null,
      rootMargin: '20px 0px 0px 0px',
      trackVisibility: true,
      delay: 150,
      thresholds
    }
    onMounted(() => {
      createObserver(observeRef.value, options)
      createObserver(observeRef2.value, options)
      console.log(observeRef.value)
    })

    return { observeRef, observeRef2 }
  }
})
</script>

<style lang="scss">
body{
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

ul, li{
  padding:0;
  margin:0;
}

.page{
  height: 200vh;
}
.observe-me, .observe-me-2{
  margin-top: 100vh;
  background:green;
  height: 500px;
}
.observe-me-2{
  background:red;
  margin-top: 32px
}
</style>
