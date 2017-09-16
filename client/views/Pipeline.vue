<style module lang='scss'>
  .page {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
  }
  .body {
    display: flex;
    flex: 1;
    flex-direction: row;
    width: 100%;
  }
  .siderail {
    display: flex;
    box-sizing: border-box;
    width: 30%;
    padding: 20px;
    height: 100%;
    border-right: 1px solid #AAA;
  }
  .middle {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    background: #f1f4f5;
  }
  .middleContent {
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    flex: 1;
    background-color: #FFF;
    border: 1px solid #e0e4e6;
    box-shadow: 0 0 1px rgba(95,108,114,0.08), 0 0px 6px rgba(95,108,114,0.05);
    margin: 20px 50px;
  }
</style>

<template>
  <div v-bind:class="$style.page">
    <div v-bind:class="$style.body">
      <div v-bind:class="$style.siderail">
        <siderail></siderail>
      </div>
      <div v-bind:class="$style.middle">
        <div v-bind:class="$style.middleContent">
          test
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Siderail from '../components/Siderail.vue'
  export default {
    components: {
      Siderail,
    }
  }
</script>
