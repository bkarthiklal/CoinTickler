<script>
import { Doughnut } from 'vue-chartjs'
import exportedVars from '@/scss/_variables.scss'

export default {
  extends: Doughnut,
  props: {
    chartData: {
      type: Object,
      required: true,
      default: null,
    },
    options: {
      type: Object,
      required: false,
      default() {
        return {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            animateRotate: true,
          },
        }
      },
    },
  },
  computed: {
    formattedChartData() {
      const { chartPrimary, chartSecondary } = exportedVars
      const chartData = this.chartData
      chartData.datasets[0].backgroundColor = [chartPrimary, chartSecondary]
      return chartData
    },
  },
  watch: {
    formattedChartData: {
      handler() {
        this.renderChart(this.formattedChartData, this.options)
      },
      deep: true,
    },
  },
  mounted() {
    this.renderChart(this.formattedChartData, this.options)
  },
}
</script>