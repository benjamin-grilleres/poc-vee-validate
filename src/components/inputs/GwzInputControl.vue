<template>
  <div>
    <label v-if="label" class="label" :for="name"> {{ label }} </label >
    <div class="mt-1">
      <slot :error="!!message">
        <Field
          :id="name"
          :name="name"
          :type="type"
          :rules="rules"
          :label="labelInput"
          class="toto"
          :class="{
            'input': true,
            '-error': !!message
          }"
        />
      </slot >
          
    </div>
    <p v-if="showErrors && message" class="text-red-700 text-sm">{{ message }} </p>
  </div>
</template>
<script>
import { Field, ErrorMessage, useFieldError } from 'vee-validate'
import { string, bool } from 'vue-types'

export default {
  components: {
    Field
  },
  setup(props) {
    // we need to know when there is an error to add a class on the input
    const message = useFieldError(props.name);

    return {
      message
    }
  },
  props: {
    label: string(),
    name: string(),
    rules: string(),
    type: string(),
    labelInput: string(), // label used on error message
    showErrors: bool().def(true),
  }
}
</script>