/**
 * 云函数示例：getGoods
 * 部署方式：微信开发者工具中右键本目录 →「上传并部署：云端安装依赖」
 * 后续：将演示数据替换为云数据库 goods 集合查询
 */
const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

exports.main = async (event, context) => {
  // TODO: 换成真实数据
  // const db = cloud.database()
  // const res = await db.collection('goods').get()
  // return { code: 0, data: res.data }

  return {
    code: 0,
    data: [
      { id: 'g001', name: '高山紫皮百香果 · 5 斤装', price: 39.9, desc: '现摘现发，果香浓郁' },
      { id: 'g002', name: '百香果蜂蜜水组合', price: 59.9, desc: '果 + 蜜，泡水一绝' },
      { id: 'g003', name: '果园直发尝鲜装 · 3 斤', price: 25.9, desc: '第一次吃选这个' }
    ]
  }
}
