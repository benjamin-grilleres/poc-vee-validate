<template>
  <GwzInputControl :name="name" :label="label">
    <template #default="{ error }">
        <Field
          :rules="rules"
          as="select"
          :id="name"
          :name="name"
          :class="{
            'input': true,
            '-error': !!error}"
        >
          <option
            v-for="(option,key) in options"
            :key="'option-' + key"
            :value="option.value"
          >{{ option.label }}</option>
        </Field>
    </template>
  </GwzInputControl >
</template>
<script>
import { string, array } from 'vue-types'
import { Field } from 'vee-validate'
import GwzInputControl from '@components/inputs/GwzInputControl.vue'

export default {
  components: {
    GwzInputControl,
    Field
  },
  props: {
    label: string(),
    name: string(),
    rules: string(),
    options: array()
  }
}
</script>