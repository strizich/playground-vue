<template>
  <div>
    {{ parseThing(thing) }}
  </div>
</template>

<script>
  export default {
    name: 'StringChanger',
    setup () {

      const thing = 'a3b3c4'

      const repeatLetters = (l, n) => {
        let letters = []
        for (var i = 0; i < n; i++){
          letters.push(l)
        }
        return letters.join('')
      }

      const parseThing = (input) => {
        const inputArr = input.split(/([0-9]+)/)
        const numbers = inputArr.filter(item => parseInt(item))
        const letters = inputArr.filter(item => !parseInt(item))

        const obj = letters.map((item, index) => {
          return repeatLetters(item, numbers[index])
        })
        const response = obj.join('')

        return response
      }
      return { thing, parseThing }
    }
  }
</script>

<style lang="scss" scoped>

</style>