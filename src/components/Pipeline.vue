<style>
  #pipeline {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    border: 1px solid black;
  }
  #pipeline .bar {
    background-color: blue;
    fill: blue;
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
        // dataset: [2, 4, 6, 8, 10, 25]
        dataset: Array.from(new Array(25),
          () => Math.random() * 50)
      }
    },
    mounted () {
      // this.renderHtmlVersion()
      console.log('check dataset ', this.dataset)
      this.renderSvgVersion()
    },
    methods: {
      renderSvgVersion () {
        const pipelineWidth = 400
        const pipelineHeight = 300
        const svg = d3.select('#pipeline').append('svg')
          .attr('width', pipelineWidth)
          .attr('height', pipelineHeight)
        const yScale = d3.scaleLinear()
          .domain([0, 25])
          .range([0, pipelineHeight])
        svg.selectAll('rect')
          .data(this.dataset)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('x', function (d, i) {
            return i * 22
          })
          .attr('y', (d) => {
            return pipelineHeight - yScale(d)
          })
          .attr('width', 20)
          .attr('height', function (d) {
            return yScale(d)
          })
      },
      renderHtmlVersion () {
        d3.select('#pipeline').selectAll('div')
          .data(this.dataset)
          .enter()
          .append('div')
          .attr('class', 'bar')
          .style('height', (d) => {
            console.log('checking data ', d)
            return d * 5 + 'px'
          })
      }
    }
  }
</script>
