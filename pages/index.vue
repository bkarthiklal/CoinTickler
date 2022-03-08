<template>
  <div class="root_template">
    <div class="app-container">
      <h1 class="app-title">SIP Calculator</h1>
      <b-tabs content-class="mt-3" lazy fill>
        <b-tab title="SIP">
          <keep-alive>
            <TabSip />
          </keep-alive>
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
          <b-alert show>CARG</b-alert>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
