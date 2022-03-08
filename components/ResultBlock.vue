<template>
  <!-- Results Block  -->
  <div class="result-block">
    <div
      v-for="(result, index) in formattedResults"
      :key="index"
      class="result-row"
    >
      <div class="result-label">{{ result.label || '' }}</div>
      <div class="result-value">
        <span>{{ result.value || '' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultBlock',
  filters: {
    currency(value) {
      if (typeof value !== 'number') {
        return value
      }
      const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
      })
      return formatter.format(value).slice(0, -3)
    },
    percentage(value) {
      if (typeof value !== 'number') {
        return value
      }
      return `${parseFloat(value).toFixed(2)} %`
    },
  },
  props: {
    resultData: {
      type: Array,
      required: true,
      default() {
        return [
          {
            label: 'Invested amount',
            value: 0,
            type: 'currency',
          },
          {
            label: 'Expected returns',
            value: 0,
            type: 'currency',
          },
          {
            label: 'Total value',
            value: 0,
            type: 'currency',
          },
        ]
      },
    },
    investedAmount: {
      type: Number,
      required: false,
      default: 0,
    },
    expectedReturns: {
      type: Number,
      required: false,
      default: 0,
    },
    totalValue: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  computed: {
    formattedResults() {
      return this.resultData.map((data) => {
        const { value, type } = data
        const formattedValue = this.$options.filters[type]
          ? this.$options.filters[type](value)
          : value
        return {
          ...data,
          value: formattedValue,
        }
      })
    },
  },
}
</script>
