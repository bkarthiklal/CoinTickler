<script>
import { Doughnut } from 'vue-chartjs'

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
  watch: {
    chartData: {
      handler() {
        this.renderChart(this.chartData, this.options)
      },
      deep: true,
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}
</script>