<template>
  <div class="row-block">
    <div class="input-block">
      <div class="label">
        {{ label }}
      </div>
      <div class="field">
        <div class="input">
          <span v-if="isCurrency" class="currency">
            <span>₹</span>
          </span>
          <input
            v-model.lazy="sliderModal"
            class="input-field"
            type="number"
            maxlength="250"
            placeholder="500"
            :min="min"
            :max="max"
          />
          <span v-if="isPercentage" class="percent">%</span>
          <span v-if="isYear" class="year">Yr</span>
        </div>
      </div>
    </div>
    <!-- Range Slider  -->
    <range-slider
      v-if="hasSlider"
      v-model.lazy="sliderModal"
      class="slider"
      :min="min"
      :max="max"
      :step="step"
    >
    </range-slider>
  </div>
</template>

<script>
export default {
  name: 'InputRowBlock',
  model: {
    prop: 'sliderModal',
    event: 'update',
  },
  props: {
    label: {
      type: String,
      required: true,
      default: '',
    },
    min: {
      type: Number,
      required: false,
      default: 0,
    },
    max: {
      type: Number,
      required: false,
      default: 100,
    },
    step: {
      type: Number,
      required: false,
      default: 10,
    },
    inputType: {
      type: String,
      required: true,
      default: 'currency',
    },
    initValue: {
      type: Number,
      required: false,
      default: 0,
    },
    hasSlider: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      sliderModal: 0,
    }
  },
  computed: {
    isCurrency() {
      return this.inputType === 'currency'
    },
    isPercentage() {
      return this.inputType === 'percentage'
    },
    isYear() {
      return this.inputType === 'years'
    },
  },
  watch: {
    sliderModal(val) {
      this.$emit('update', val)
    },
    initValue: {
      handler(val) {
        this.sliderModal = val
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>
