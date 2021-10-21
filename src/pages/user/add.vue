<template>
  <Container>
    <h1 class="mb-8">Ajouter un utilisateur</h1 >
    <UserForm v-model="formValues"></UserForm >
  </Container>
</template>

<script setup>
import UserForm from '@components/UserForm.vue'
import Container from '@components/Container.vue'
import { ref } from 'vue'

const formValues = {
  phone: {
    prefix: '+33'
  }
}
</script>