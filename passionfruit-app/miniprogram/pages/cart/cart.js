// 果篮（购物车）骨架：待接入下单与支付
Page({
  data: {
    items: [],
    tip: '果篮还是空的，先去挑两斤？'
  },
  goGoods() {
    wx.switchTab({ url: '/pages/goods/goods' })
  }
})
