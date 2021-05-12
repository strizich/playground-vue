<template>
  <div>
    <form @submit.prevent="makeContact">
      <input v-model="contact.firstName" />
      <input v-model="contact.lastName" />
      <input v-model="contact.email" />
      <input v-model="contact.address" />
      {{contact.firstName}}
      <button type="submit" :disabled="isDisabled">Add</button>
    </form>
    <hr />

    <div class="contact__list">
      <input type="search" v-model="search" />
      <ul>
        <li v-for="(item, index) in computedContactList" :key="item.id">
          {{ item.id }}
          {{ item.firstName }}
          {{ item.lastName }}
          {{ item.email }}
          {{ item.address }}
          <button @click="deleteContact(index)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { toRefs, reactive, computed, onMounted } from 'vue'

  const CONTACTS_LIST_DEFAULTS = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      email: 'js@emailaddress.com',
      address: '21345 Somewhere Rd.'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'js@emailaddress.com',
      address: '21345 Somewhere Rd.'
    }
  ]

  const CONTACT_DEFAULTS = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'js@emailaddress.com',
    address: '21345 Somewhere Rd.'
  }
  
  export default {
    setup () {
      let contactList = CONTACTS_LIST_DEFAULTS

      const state = reactive({
        search: '',
        contact: CONTACT_DEFAULTS
      })

      const makeContact = () => {
        let newItem = {
          id: contactList.length + 1,
          firstName: state.contact.firstName,
          lastName: state.contact.lastName,
          email: state.contact.email,
          address: state.contact.address
        }
        contactList.push(newItem)
        console.log(contactList)
        clearContactFields()
      }

      const clearContactFields = () => {
        state.contact.firstName = ''
        state.contact.lastName = ''
        state.contact.email = ''
        state.contact.address = ''
      }

      const isDisabled = computed(() => {
        if (
          !state.contact.firstName ||
          !state.contact.lastName ||
          !state.contact.email ||
          !state.contact.address
        ) {
          return true
        }
      })

      // gross
      const search = (array, keyword) => {
        return array.filter((value) => {
          const tags = Object.values(value)
          const stringify = tags.toString().split(',').join(' ')
          const result = stringify.includes(keyword.toLowerCase()) || !keyword
          return result
        })
      }
      const searchByField = (keyword) => {
        const result = contactList.filter(contact => {
          const fullName = `${contact.firstName} ${contact.lastName}`
          const name = fullName.toLowerCase()
          const address = contact.address.toLowerCase()
          const email = contact.email.toLowerCase()

          return name.includes(keyword)
            || address.includes(keyword)
            || email.includes(keyword)
        })
        console.log(result)
        return result
      }

      onMounted(() => {
        searchByField('John')
      })

      const computedContactList = computed(() => {
        console.log(contactList.some(contact => contact.toLowerCase === state.search))
        return search(contactList, state.search)
      })

      const deleteContact = (index) => {
        contactList.splice(index, 1)
      }

      return {
        ...toRefs(state),
        makeContact,
        deleteContact,
        computedContactList,
        isDisabled
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>