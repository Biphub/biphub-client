<style>
  #pipeline {
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
  #pipeline .bar-wrapper {
    height: 50px;
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  #pipeline .bar-wrapper .bar {
    background-color: blue;
    margin-right: 10px;
    width: 20px;
  }
</style>

<template>
  <div id='pipeline'>d3 goes in here</div>
</template>

<script>
  export default {
    data () {
      return {
        dataset: [2, 4, 6, 8, 10]
      }
    },
    mounted () {
      console.log('checking d3 ', d3)
      console.log('pipeline mounted!')
      d3.select('#pipeline').selectAll('div')
        .data(this.dataset)
        .enter()
        .append('div')
        .attr('class', 'bar-wrapper')
        .append('div')
        .attr('class', 'bar')
        .style('height', (d) => {
          console.log('checking data ', d)
          return d * 5 + 'px'
        })
    }
  }
</script>
