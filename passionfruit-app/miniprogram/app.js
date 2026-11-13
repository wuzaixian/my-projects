// 榕江高山百香果 · 小程序入口
App({
  onLaunch() {
    if (!wx.cloud) {
      console.error('当前基础库过低（需 2.2.3+），无法使用云能力')
    } else {
      wx.cloud.init({
        env: 'cloud1-d0gdoues4d42bb902', // 云开发环境 ID
        traceUser: true
      })
    }
  },
  globalData: {
    userInfo: null,
    brandName: '榕江高山百香果'
  }
})
