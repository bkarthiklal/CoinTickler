<template>
  <div class="calc-container">
    <h1 class="calc-title">Calculators</h1>
    <div class="calc-tab-container">
      <nuxt-link
        v-for="(card, index) in cardList"
        :key="index"
        tag="div"
        class="calc-card"
        :to="card.path"
      >
        <div class="calc-card-image-holder">
          <img
            class="cal-card-bg-img"
            :src="card.img"
            width="80"
            height="80"
            :alt="card.alt"
          />
        </div>
        <p class="calc-card-title">{{ card.title }}</p>
        <p class="calc-card-body">
          {{ card.body }}
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      cardList: [
        {
          alt: 'SIP Calculator',
          title: 'SIP',
          img: 'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/sip.1cfa4f78.png',
          body: 'Calculate how much you need to save or how much you will accumulate with your SIP',
          path: '/calculator/sip',
        },
        {
          alt: 'Lumpsum Calculator',
          title: 'Lumpsum',
          img: 'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/lumpsum.443c49ba.png',
          body: 'Calculate returns for lumpsum investments to achieve your financial goals',
          path: '/calculator/lumpsum',
        },

        {
          alt: 'CAGR Calculator',
          title: 'CAGR',
          img: 'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/retirement.030b2902.png',
          body: 'The simplest compound annual growth rate calculator',
          path: '/calculator/cagr',
        },
        {
          alt: 'Step Up Sip Calculator',
          title: 'Step Up Sip',
          img: 'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/gratuity.7d50fedc.png',
          body: 'Calculate how much you will accumulate with your SIP on slight annual increment',
          path: '/calculator/stepupsip',
        },
        {
          alt: 'Inflation Calculator',
          title: 'Inflation',
          img: 'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/emi.a2ccc24e.png',
          body: 'Calculate how much your products will cost in the coming years with inflation',
          path: '/calculator/inflation',
        },
        {
          alt: 'Deflation Calculator',
          title: 'Deflation',
          img: 'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/investment.45f860f7.png',
          body: 'Calculate how much you money will cost in the coming years with deflation - effect of inflation',
          path: '/calculator/deflation',
        },
      ],
    }
  },
}
</script>


<style lang="scss" scoped>
.calc-container {
  margin: 5vw;
  .calc-title {
    cursor: pointer;
  }
  .calc-tab-container {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    .calc-card {
      height: 240px;
      position: relative;
      border: 1px solid #ecedef;
      border-radius: 8px;
      overflow: hidden;
      padding: 24px;
      margin: 1.5em;
      &:hover {
        cursor: pointer;
      }
      .calc-card-image-holder {
        .cal-card-bg-img {
          opacity: 0.7;
          position: absolute;
          right: -5px;
          top: 163px;
          transition: opacity 0.3s ease 0s;
          width: 80px;
          height: 80px;
        }
      }
      .calc-card-title {
        font: 500 20px/32px Roboto, system-ui, -apple-system, Segoe UI, Roboto,
          Ubuntu, Cantarell, Noto Sans, sans-serif;
        margin: 0px;
      }
      .calc-card-body {
        letter-spacing: 0.14px;
        width: 14em;
        font: 14px/22.4px Roboto, system-ui, -apple-system, Segoe UI, Roboto,
          Ubuntu, Cantarell, Noto Sans, sans-serif;
        margin: 12px 0px 0px;
      }
    }
  }
}
</style>