<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
      <v-tab :tabs="tabs"></v-tab>
    </div>
  </div>
</template>

<script>
  import VHeader from 'components/v-header/v-header'
  import Goods from 'components/goods/goods'
  import Ratings from 'components/ratings/ratings'
  import Seller from 'components/seller/seller'
  import VTab from 'components/tab/tab'
  import {getSeller} from 'api'

  export default {
    name: 'app',
    data() {
      return {
        seller: {}
      }
    },
    components: {
      VHeader,
      VTab
    },
    computed: {
      tabs() {
        return [
          {
            label: '商品',
            component: Goods,
            data: {
              seller: this.seller
            }
          },
          {
            label: '评论',
            component: Ratings,
            data: {
              seller: this.seller
            }
          },
          {
            label: '商家',
            component: Seller,
            data: {
              seller: this.seller
            }
          }
        ]
      }
    },
    created() {
      this._getSeller()
    },
    methods: {
      _getSeller() {
        getSeller().then(seller => {
          this.seller = seller
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>
  #app
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
</style>
