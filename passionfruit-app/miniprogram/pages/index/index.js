// 首页：品牌横幅 + 进店入口
Page({
  data: {
    slogan: '贵州黔东南 · 高山云雾里长出的甜'
  },
  goGoods() {
    wx.switchTab({ url: '/pages/goods/goods' })
  }
})
