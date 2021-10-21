<template>
  <Container>
    <h1 class="mb-8">Modifier un utilisateur</h1 >
    <UserForm v-model="formValues"></UserForm >
  </Container>
</template>

<script setup>
import UserForm from '@components/UserForm.vue'
import Container from '@components/Container.vue'
import { ref } from 'vue'

const formValues = {
  'first-name': 'test firstname',
  'last-name': 'test lastname',
  phone: {
    prefix: '+33',
    number: '637350456'
  }
}
</script>