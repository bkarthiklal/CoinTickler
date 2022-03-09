<template>
  <div class="tab-contents-block">
    <div class="tab-content-left-block m-4">
      <InputRowBlock
        v-for="(row, index) in inputFields"
        :key="index"
        v-model="fields[row.modelName]"
        v-bind="row"
        :init-value="fields[row.modelName]"
      />
    </div>
    <div class="tab-content-right-block m-4">
      <!-- Chart Section -->
      <DoughNutChart :chart-data="chartData" :styles="doughnutStyle" />
      <!-- Results Section  -->
      <ResultBlock :result-data="results" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InflationCalculator',
  data() {
    return {
      inputFields: [
        {
          label: 'Current Value',
          min: 1000,
          max: 10000000,
          step: 1000,
          inputType: 'currency',
          modelName: 'currentValue',
          hasSlider: false,
        },
        {
          label: 'Inflation rate (p.a)',
          min: 1,
          max: 100,
          step: 1,
          inputType: 'percentage',
          modelName: 'inflationRate',
          hasSlider: false,
        },
        {
          label: 'Time period (years)',
          min: 1,
          max: 100,
          step: 1,
          inputType: 'years',
          modelName: 'timePeriod',
          hasSlider: false,
        },
      ],
      fields: {
        currentValue: 1000,
        inflationRate: 6,
        timePeriod: 15,
      },
    }
  },
  computed: {
    doughnutStyle() {
      return {
        maxWidth: '30vw',
        maxHeight: '40vh',
      }
    },
    currentValue() {
      const { currentValue } = this.fields
      return currentValue
    },
    finalValue() {
      const { currentValue, inflationRate, timePeriod } = this.fields
      const result = this.calculateResult(
        currentValue,
        inflationRate,
        timePeriod
      )
      return parseInt(result)
    },
    inflationAmount() {
      return parseInt(this.finalValue - this.currentValue)
    },
    results() {
      return [
        {
          label: 'Current Value',
          value: this.currentValue,
          type: 'currency',
        },
        {
          label: 'Inflation Amount',
          value: this.inflationAmount,
          type: 'currency',
        },
        {
          label: 'Future Fund Need',
          value: this.finalValue,
          type: 'currency',
        },
      ]
    },
    chartData() {
      return {
        labels: ['Current Value', 'Inflation Amount'],
        datasets: [
          {
            data: [this.currentValue, this.inflationAmount],
            hoverOffset: 4,
          },
        ],
      }
    },
  },
  methods: {
    calculateResult(currentValue, inflationRate, timePeriod) {
      return currentValue * (1 + inflationRate / 100) ** timePeriod
    },
  },
}
</script>
