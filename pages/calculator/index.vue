<template>
  <div class="root_template">
    <div class="app-container">
      <nuxt-link to="/" tag="h1" class="app-title">
        Investment Calculator
      </nuxt-link>
      <div class="tabs">
        <ul class="nav nav-tabs">
          <nuxt-link
            v-for="(route, index) in navRoutes"
            :key="index"
            :to="route.path"
            tag="li"
            class="nav-link"
          >
            <span>
              {{ route.name }}
            </span>
          </nuxt-link>
        </ul>
        <div class="tab-content">
          <nuxt-child />
        </div>
      </div>
      <b-tabs content-class="mt-3" lazy fill>
        <b-tab title="SIP">
          <NuxtChild></NuxtChild>
        </b-tab>
        <b-tab title="Lumpsum">
          <keep-alive>
            <TabLumpSum />
          </keep-alive>
        </b-tab>
        <b-tab title="Step Up Sip">
          <keep-alive>
            <TabStepUpSip />
          </keep-alive>
        </b-tab>
        <b-tab title="Inflation">
          <keep-alive>
            <TabInflation />
          </keep-alive>
        </b-tab>
        <b-tab title="Deflation">
          <keep-alive>
            <TabDeflation />
          </keep-alive>
        </b-tab>
        <b-tab title="CARG">
          <keep-alive>
            <TabCAGR />
          </keep-alive>
        </b-tab>
      </b-tabs>
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
    }
  },
}
</script>
