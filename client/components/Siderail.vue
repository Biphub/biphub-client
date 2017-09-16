<style module lang="scss">
  .component {
    width: 100%;
  }
  .siderailMeta {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .inputClass {
    width: 100%;
    margin-bottom: 5px;
  }
  .trigger {
    border: 1px solid black;
  }
  .action {
  
  }
</style>

<template>
  <div v-bind:class='$style.component'>
    <div v-bind:class="$style.siderailMeta">
      <el-input
        placeholder='Name the pipeline'
        icon="search"
        v-bind:input-class='$style.inputClass'
      />
      <div>Add a note</div>
    </div>
    <steps v-bind:stepsData='this.stepsData'></steps>
  </div>
</template>

<script>
  import {
    Input
  } from 'element-ui'
  import Steps from './Steps.vue'
  export default {
    components: {
      Input,
      Steps,
    },
    data() {
      return {
        // TODO: Remove this data outside of this component
        stepsData: [
          {
            type: 'Trigger',
            submenu: [
              { name: 'Select a pod', selected: true },
              { name: 'Authenticate', selected: false },
              { name: 'Choose options', selected: false },
            ]
          },
          {
            type: 'Action',
            submenu: [
              { name: 'Select a pod', selected: false },
              { name: 'Authenticate', selected: false },
              { name: 'Text Template', selected: false },
            ]
          },
          {
            type: 'Action',
            submenu: [
              { name: 'Select a pod', selected: false },
              { name: 'Authenticate', selected: false },
              { name: 'Text Template', selected: false },
            ]
          }
        ]
      }
    },
    mounted () {
      console.log('checking mounted!')
    }
  }
</script>
