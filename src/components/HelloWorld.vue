<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { required } from '@vee-validate/rules';
const submit = () => {
  console.log('hello')
}
</script>

<template>
  <div>
    <Form @submit="submit">
      <Field name="input1" type="text" placeholder="hello"></Field>
      <ErrorMessage name="input1"></ErrorMessage>

      <button>Submit</button>
    </Form >
  </div>
</template>