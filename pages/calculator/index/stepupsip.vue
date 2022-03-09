<script>
import Sip from './sip.vue'
export default {
  name: 'StepUpSipCalculator',
  extends: Sip,
  data() {
    return {
      inputFields: [
        {
          label: 'Monthly investment',
          min: 1000,
          max: 1000000,
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
          label: 'Annual step up',
          min: 1,
          max: 50,
          step: 1,
          inputType: 'percentage',
          modelName: 'annualIncrement',
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
        monthlyInvestment: 1000,
        expectedReturnRate: 12,
        timePeriod: 15,
        annualIncrement: 10,
      },
      netInvested: 0,
    }
  },
  computed: {
    expectedReturnRate() {
      const { expectedReturnRate } = this.fields
      if (this.inflationAdjusted) {
        return expectedReturnRate - 6
      }
      return expectedReturnRate
    },
    monthlyInvestment() {
      const { monthlyInvestment } = this.fields
      return monthlyInvestment
    },
    timePeriod() {
      const { timePeriod } = this.fields
      return timePeriod
    },
    annualIncrement() {
      const { annualIncrement } = this.fields
      return annualIncrement
    },
    investedAmount() {
      const { netInvested } = this.stepUpSipReturns(
        this.monthlyInvestment,
        this.expectedReturnRate,
        this.timePeriod,
        this.annualIncrement
      )
      return parseInt(netInvested)
    },
    expectedReturns() {
      return parseInt(this.totalReturns - this.investedAmount)
    },
    totalReturns() {
      return parseInt(
        this.calculateResult(
          this.monthlyInvestment,
          this.expectedReturnRate,
          this.timePeriod,
          this.annualIncrement
        )
      )
    },
  },
  methods: {
    calculateResult(
      monthlyInvestment,
      expectedReturnRate,
      timePeriod,
      annualIncrement
    ) {
      const { netReturns } = this.stepUpSipReturns(
        monthlyInvestment,
        expectedReturnRate,
        timePeriod,
        annualIncrement
      )
      return netReturns
    },
  },
}
</script>