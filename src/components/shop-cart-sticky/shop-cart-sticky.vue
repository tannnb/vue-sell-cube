<template>
  <div class="shop-cart-sticky" v-show="visible">
    <shop-cart
      ref="shopCart"
      :selectFoods="selectFoods"
      :deliveryPrice="deliveryPrice"
      :minPrice="minPrice"
      :Fold="Fold"
      :sticky=true
    ></shop-cart>
  </div>
</template>

<script>
import ShopCart from 'components/shop-cart/shop-cart'

export default {
  name: 'shop-cart-sticky',
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [
          {
            price: 10,
            count: 1
          }
        ]
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    },
    Fold: {
      type: Boolean,
      default: true
    },
    list: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  components: {
    ShopCart
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .shop-cart-sticky
    position: absolute
    left: 0
    bottom: 0
    z-index: 999
    width: 100%
    height: 48px
</style>
