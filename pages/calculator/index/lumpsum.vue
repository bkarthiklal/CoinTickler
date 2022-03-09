<script>
import Sip from './sip.vue'
export default {
  name: 'LumpSumCalculator',
  extends: Sip,
  data() {
    return {
      inputFields: [
        {
          label: 'Total investment',
          min: 1000,
          max: 10000000,
          step: 1000,
          inputType: 'currency',
          modelName: 'monthlyInvestment',
        },
        {
          label: 'Expected return rate (p.a)',
          min: 5,
          max: 150,
          step: 1,
          inputType: 'percentage',
          modelName: 'expectedReturnRate',
        },
        {
          label: 'Time period',
          min: 1,
          max: 100,
          step: 1,
          inputType: 'years',
          modelName: 'timePeriod',
        },
      ],
      fields: {
        monthlyInvestment: 10000,
        expectedReturnRate: 12,
        timePeriod: 15,
      },
    }
  },
  computed: {
    investedAmount() {
      return parseInt(this.monthlyInvestment)
    },
  },
  methods: {
    calculateResult(investmentAmount, expectedReturnRate, timePeriod) {
      return this.lumpSumReturns(
        investmentAmount,
        expectedReturnRate,
        timePeriod
      )
    },
  },
}
</script>