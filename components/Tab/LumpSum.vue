<script>
import Sip from './Sip.vue'
export default {
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
      return parseInt(this.fields.monthlyInvestment)
    },
  },
  methods: {
    calculateResult(investmentAmount, expectedReturnRate, timePeriod) {
      /**
       * Logic Flow : Compound Interest Formula
       * A = P (1 + r/n) ^ nt
       * Where:
       * A = Future Value of Investments/Loan (Amount)
       * P = Principal investment amount (the initial deposit or loan amount)
       * r = Interest Rate
       * n = Number of times that Interest is Compounded
       * t = Tenure of the investment (Time) or the number of periods the money is invested or borrowed
       */
      const P = investmentAmount
      const r = expectedReturnRate / 100
      const n = 1
      const t = timePeriod
      const A = P * Math.pow(1 + r / n, n * t)
      return A
    },
  },
}
</script>