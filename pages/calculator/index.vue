<template>
  <div class="root_template">
    <div class="app-container">
      <div class="app-title-container">
        <div class="sidenav-div">
        
        </div>
        <div class="title-container">
          <nuxt-link to="/" tag="h1" class="app-title">
            Investment Calculator
          </nuxt-link>
          <div class="inflation-switch"> 
              <b-form-checkbox
                v-if="showInflationAdjuster"
                v-model="adjustForInflation"
                name="check-button"
                switch
                button-variant="warning"
              >
                <strong> Inflation Adjusted </strong>
              </b-form-checkbox>
          </div>
        </div>
      </div>
      <div class="tabs">
        <ul class="nav nav-tabs">
          <nuxt-link
            v-for="(route, index) in navRoutes"
            :key="index"
            :to="route.path"
            tag="li"
            class="nav-item nav-link"
          >
            <span>
              {{ route.name }}
            </span>
          </nuxt-link>
        </ul>
        <div id="route-name-div">
          <strong> 
            {{ routeName }}
          </strong>
        </div>
        <div class="tab-content">
          <nuxt-child :inflation-adjusted="adjustForInflation" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CalculatorPage',
  data() {
    return {
      navRoutes: [
        {
          path: '/calculator/sip',
          name: 'SIP',
        },
        {
          path: '/calculator/lumpsum',
          name: 'Lumpsum',
        },
        {
          path: '/calculator/stepupsip',
          name: 'Step Up Sip',
        },
        {
          path: '/calculator/inflation',
          name: 'Inflation',
        },
        {
          path: '/calculator/deflation',
          name: 'Deflation',
        },
        {
          path: '/calculator/cagr',
          name: 'CAGR',
        },
      ],
      adjustForInflation: false,
    }
  },
  computed: {
    showInflationAdjuster() {
      const { name } = this.$route
      const acceptedList = [
        'calculator-index-stepupsip',
        'calculator-index-lumpsum',
        'calculator-index-sip',
      ]
      return acceptedList.includes(name)
    },
    routeName() {
      const currentPath = this.$route.path;
      const { name } = this.navRoutes.find(x => x.path === currentPath)
      return name || ''
    }
  },
}
</script>
