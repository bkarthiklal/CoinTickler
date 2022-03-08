<template>
  <!-- Results Block  -->
  <div class="result-block">
    <div class="result-row">
      <div class="result-label">Invested amount</div>
      <div class="result-value">
       <span>{{ investedAmount | currency }}</span>
      </div>
    </div>
    <div class="result-row">
      <div class="result-label">Est. returns</div>
      <div class="result-value">
       <span>{{ expectedReturns | currency }}</span>
      </div>
    </div>
    <div class="result-row">
      <div class="result-label">
        <strong>
          Total value
        </strong>
      </div>
      <div class="result-value">
       <span>{{ totalValue | currency }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultBlock',
  filters: {
    currency(value) {
      if (typeof value !== "number") {
          return value;
      }
      const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'INR'
      });
      return formatter.format(value).slice(0, -3);
    }
  },
  props: {
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

}
</script>
