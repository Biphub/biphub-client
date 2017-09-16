<style module lang='scss'>
  .step {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .stepType {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 5px;
    font-size: 13px;
    font-weight: bold;
    width: 20%;
    height: 20px;
    background: #AAA;
    color: white;
    margin-bottom: 5px;
  }
  .submenu {
    display: flex;
    flex-direction: column;
  }
  .submenu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .submenu-item--selected {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid #888;
  }
</style>

<template>
  <div v-bind:class='$style.step'>
    <div v-bind:class='$style.stepType'>{{stepType}}</div>
    <div v-bind:class='$style.submenu'>
      <div v-for='(item, i) in submenuItems'
           v-bind:key='`menuItem-${i}`'
      >
        <div v-if='item.selected'
             v-bind:class='$style["submenu-item--selected"]'
        >
          {{ item.name }}
        </div>
        <div v-if='!item.selected'
             v-bind:class='$style["submenu-item"]'
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bip-step',
    props: {
      stepType: { type: String, default: 'Trigger' },
      submenuItems: { type: Array, default: [] },
    },
    mounted () {
      console.log('step !', this.submenuItems)
    }
  }
</script>
