<template>
  <div>
    
  </div>
</template>

<script>
  import { onMounted } from 'vue'

  export default {
    setup() {
      const numbers = '12345'
      
      onMounted(() => {
        const thingy = numbers.split('')
        const evenNumbers = thingy.filter(num => {
          return num % 2
        }).reverse()
        const oddNumbers = thingy.filter(num => {
          return num % 2 === 0
        })
        const mergedThingy = oddNumbers.concat(evenNumbers)

        const reverseThingy = thingy.reverse()
        console.log(evenNumbers, oddNumbers, reverseThingy, mergedThingy)
      })
    }

  }
</script>

<style lang="scss" scoped>

</style>