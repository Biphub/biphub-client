<style module lang='scss'>
</style>

<template>
  <div v-bind:class='$style.steps'>
    <bip-step v-for='(step, i) in stepsData'
              v-bind:key='`step-${i}`'
              v-bind:stepType='step.type'
              v-bind:submenuItems='step.submenu'
    ></bip-step>
  </div>
</template>

<script>
  import Step from './Steps.vue'
  import BipStep from "./Step.vue";
  export default {
    components: {
      BipStep,
      Step
    },
    props: {
      stepsData: { type: Array, default: [] },
    },
    mounted () {
      console.log('checking steps ', this.stepsData)
    }
  }
</script>
