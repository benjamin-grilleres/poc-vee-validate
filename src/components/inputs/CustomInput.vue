<template>
  <div class="custom-input">
      <label class="label">Custom input</label>
      <div class="flex">
        <GwzSelect
        rules="required"
        name="phone.prefix"
        class="gwz-prefix"
        :show-errors="false"
        :options="optionsPrefix"
      >
      </GwzSelect>
      <GwzInputControl
        rules="required" 
        type="text" 
        name="phone.number"
        class="gwz-phone"
        :show-errors="false"
      ></GwzInputControl>
      </div>
      <p v-if="prefix || phone" class="text-red-700 text-sm">Veuillez renseigner les champs</p>
  </div>
</template>

<script setup>
import GwzInputControl from '@components/inputs/GwzInputControl.vue'
import GwzSelect from '@components/inputs/GwzSelect.vue'
import { defineRule, useFieldError } from 'vee-validate';

const prefix = useFieldError('phone.prefix')
const phone = useFieldError('phone.number')
const optionsPrefix = [
  {
    value: '+33',
    label: '+33'
  },
  {
    value: '+34',
    label: '+34'
  },
  {
    value: '+35',
    label: '+35'
  },
]
</script >

<style lang="postcss">
  .custom-input {
    @apply pt-6;
  }
  .gwz-prefix .input {
      @apply border-r-0 rounded-tr-none rounded-br-none;
    }

  .gwz-phone .input {
      @apply rounded-tl-none rounded-bl-none;

  }
</style>