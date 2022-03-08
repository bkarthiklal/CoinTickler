<script>
import Sip from './Sip.vue'
export default {
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
    investedAmount() {
      const {
        monthlyInvestment,
        expectedReturnRate,
        timePeriod,
        annualIncrement,
      } = this.fields
      const { netInvested } = this.stepUpSipReturns(
        monthlyInvestment,
        expectedReturnRate,
        timePeriod,
        annualIncrement
      )
      return parseInt(netInvested)
    },
    expectedReturns() {
      return parseInt(this.totalReturns - this.investedAmount)
    },
    totalReturns() {
      const {
        monthlyInvestment,
        expectedReturnRate,
        timePeriod,
        annualIncrement,
      } = this.fields
      return parseInt(
        this.calculateResult(
          monthlyInvestment,
          expectedReturnRate,
          timePeriod,
          annualIncrement
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