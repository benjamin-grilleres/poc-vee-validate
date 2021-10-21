<template>
  <Form @submit="submit" :initial-values="modelValue" class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200">
      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <GwzInputControl 
            label="First name" 
            labelInput="Prénom"
            rules="required" 
            type="text" 
            name="first-name"
          >
          </GwzInputControl>
        </div>

        <div class="sm:col-span-3">
          <GwzInputControl 
            label="Last name" 
            rules="required" 
            type="text" 
            name="last-name"
          ></GwzInputControl>
        </div>

        <div class="sm:col-span-4">
          <GwzInputControl 
            label="Email" 
            rules="required|email" 
            type="email" 
            name="email"
          ></GwzInputControl>
        </div>

        <div class="sm:col-span-3">
          <GwzSelect
            label="Country" 
            rules="required"
            name="country"
            :options="countryOptions"
          ></GwzSelect
          
          >
        </div>

        <div class="sm:col-span-6">
          <GwzInputControl 
            label="Adresse" 
            rules="required" 
            type="text" 
            name="street-address"
          ></GwzInputControl>
        </div>

        <div class="sm:col-span-2">
          <GwzInputControl 
            label="Ville" 
            rules="required" 
            type="text" 
            name="city"
          ></GwzInputControl>
        </div>

        <div class="sm:col-span-2">
          <GwzInputControl 
            label="State/Province" 
            rules="required" 
            type="text" 
            name="state"
          ></GwzInputControl>
        </div>

        <div class="sm:col-span-2">
          <GwzInputControl 
            label="Code postal" 
            rules="required" 
            type="text" 
            name="postal-code"
          ></GwzInputControl>
        </div>
      </div>
      <CustomInput></CustomInput>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >Save</button>
      </div>
    </div>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { object } from 'vue-types'
import { required, email } from '@vee-validate/rules';
import GwzInputControl from '@components/inputs/GwzInputControl.vue'
import GwzSelect from '@components/inputs/GwzSelect.vue'
import CustomInput from '@components/inputs/CustomInput.vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: object()
})

const submit = (formValues) => {
  emit('update:modelValue', formValues)
}

const countryOptions = [{value: "a", label: 'Canada'}, {value: "f", label: 'France'}, {value: "c", label: 'Chine'}]

defineRule('required', required)
defineRule('email', email)
</script>
