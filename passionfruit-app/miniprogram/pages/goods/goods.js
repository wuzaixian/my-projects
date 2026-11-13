// 商品列表页：调用云函数 getGoods（失败时回退到演示数据）
Page({
  data: {
    loading: true,
    goodsList: []
  },

  onLoad() {
    this.fetchGoods()
  },

  async fetchGoods() {
    try {
      const res = await wx.cloud.callFunction({ name: 'getGoods' })
      this.setData({ goodsList: res.result.data, loading: false })
    } catch (err) {
      console.warn('云函数调用失败，使用演示数据', err)
      this.setData({ goodsList: demoGoods(), loading: false })
    }
  }
})

function demoGoods() {
  return [
    { id: 'g001', name: '高山紫皮百香果 · 5 斤装', price: 39.9, desc: '现摘现发，果香浓郁' },
    { id: 'g002', name: '百香果蜂蜜水组合', price: 59.9, desc: '果 + 蜜，泡水一绝' }
  ]
}
