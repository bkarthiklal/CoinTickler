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
      <ResultBlock :result-data="sipResults" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SipCalculator',
  data() {
    return {
      inputFields: [
        {
          label: 'Monthly investment',
          min: 1000,
          max: 100000,
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
          max: 70,
          step: 1,
          inputType: 'years',
          modelName: 'timePeriod',
        },
      ],
      fields: {
        monthlyInvestment: 1000,
        expectedReturnRate: 12,
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
    investedAmount() {
      return parseInt(
        this.fields.monthlyInvestment * 12 * this.fields.timePeriod
      )
    },
    expectedReturns() {
      return parseInt(this.totalReturns - this.investedAmount)
    },
    totalReturns() {
      const { monthlyInvestment, expectedReturnRate, timePeriod } = this.fields
      return parseInt(
        this.calculateResult(
          monthlyInvestment,
          expectedReturnRate,
          timePeriod
        ) || '0'
      )
    },
    sipResults() {
      return [
        {
          label: 'Invested amount',
          value: this.investedAmount,
          type: 'currency',
        },
        {
          label: 'Expected returns',
          value: this.expectedReturns,
          type: 'currency',
        },
        {
          label: 'Total value',
          value: this.totalReturns,
          type: 'currency',
        },
      ]
    },
    chartData() {
      return {
        labels: ['Invested amount', 'Est. returns'],
        datasets: [
          {
            data: [this.investedAmount, this.expectedReturns],
            hoverOffset: 4,
          },
        ],
      }
    },
  },
  methods: {
    sipReturns(monthlyInvestment, expectedReturnRate, timePeriod) {
      /**
       * Logic Formula
       * M is the amount you receive upon maturity.
       * P is the amount you invest at regular intervals.
       * n is the number of payments you have made.
       * i is the periodic rate of interest.
       * M = P × ({[1 + i]n – 1} / i) × (1 + i).
       *
       * Example: Take for example you want to invest Rs. 1,000 per month for 12 months at a periodic rate of interest of 12%.
       * then the monthly rate of return will be 12%/12 = 1/100=0.01
       * Hence, M = 1,000 x ({[1 +0.01 ]^{12} – 1} / 0.01) x (1 + 0.01)
       * which gives Rs 12,809 Rs approximately in a year.
       */
      const P = monthlyInvestment
      const i = expectedReturnRate / 12 / 100 // 12 Months in a year
      const n = timePeriod * 12
      const M = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
      return M
    },
    lumpSumReturns(investmentAmount, expectedReturnRate, timePeriod) {
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
    calculateResult(monthlyInvestment, expectedReturnRate, timePeriod) {
      return this.sipReturns(monthlyInvestment, expectedReturnRate, timePeriod)
    },
    stepUpSipReturns(
      monthlyInvestment,
      expectedReturnRate,
      timePeriod,
      annualIncrement
    ) {
      let netReturns = 0
      let netInvested = 0
      let updatedMonthly = monthlyInvestment
      for (let i = 1; i <= timePeriod; i++) {
        const sipAmount = updatedMonthly
        const OneYearReturns = this.sipReturns(sipAmount, expectedReturnRate, 1)
        const nYearReturns = this.lumpSumReturns(
          OneYearReturns,
          expectedReturnRate,
          timePeriod - i
        )
        netInvested += sipAmount * 12
        netReturns += nYearReturns
        updatedMonthly = updatedMonthly * (1 + annualIncrement / 100)
      }
      return { netReturns, netInvested }
    },
  },
}
</script>