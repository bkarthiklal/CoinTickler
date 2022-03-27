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
      <DoughNutChart class="chartDiv" :chart-data="chartData" :styles="doughnutStyle" />
      <!-- Results Section  -->
      <ResultBlock :result-data="results" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CAGRCalculator',
  data() {
    return {
      inputFields: [
        {
          label: 'Invested Amount',
          min: 1000,
          max: 10000000,
          step: 1000,
          inputType: 'currency',
          modelName: 'investedAmount',
          hasSlider: false,
        },
        {
          label: 'Total Returns',
          min: 1000,
          max: 10000000,
          step: 1000,
          inputType: 'currency',
          modelName: 'totalReturns',
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
        investedAmount: 1000,
        totalReturns: 1500,
        timePeriod: 10,
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
    investedAmount() {
      const { investedAmount } = this.fields
      return investedAmount
    },
    totalReturns() {
      const { totalReturns } = this.fields
      return totalReturns
    },
    cagrValue() {
      const { investedAmount, totalReturns, timePeriod } = this.fields
      const result = this.calculateResult(
        investedAmount,
        totalReturns,
        timePeriod
      )
      return parseFloat(result)
    },
    profitEarned() {
      const { investedAmount, totalReturns } = this.fields
      return parseInt(totalReturns - investedAmount)
    },
    results() {
      return [
        {
          label: 'Invested Amount',
          value: this.investedAmount,
          type: 'currency',
        },
        {
          label: 'Return Earned',
          value: this.profitEarned,
          type: 'currency',
        },
        {
          label: 'Total Returns',
          value: this.totalReturns,
          type: 'currency',
        },
        {
          label: 'CAGR',
          value: this.cagrValue,
          type: 'percentage',
        },
      ]
    },
    chartData() {
      return {
        labels: ['Invested Amount', 'Return Earned'],
        datasets: [
          {
            data: [this.investedAmount, this.profitEarned],
            hoverOffset: 4,
          },
        ],
      }
    },
  },
  methods: {
    calculateResult(investedAmount, totalReturns, timePeriod) {
      return ((totalReturns / investedAmount) ** (1 / timePeriod) - 1) * 100
    },
  },
}
</script>
