# passionfruit-app —— 榕江高山百香果小程序电商

> 简笔画手绘风格 · 原生态 · 手作温度 —— 这是小程序端的项目骨架。

## 技术栈

- 微信小程序**原生框架**（非 uni-app / taro）
- 微信云开发 **CloudBase**
  - 环境 ID：`cloud1-d0gdoues4d42bb902`
  - AppID：`wxab38bfde661cd086`（已写入 `project.config.json`）

## 如何跑起来

1. 打开**微信开发者工具** → 导入项目 → 选择本目录（`passionfruit-app/`）
2. AppID 会自动读取 `project.config.json`，无需手填
3. 云函数：`cloudfunctions/` 下右键函数目录 →「上传并部署：云端安装依赖」
4. 点编译，四个 Tab 页（首页 / 商品 / 购物车 / 我的）即可预览

## 目录结构

```
passionfruit-app/
├── project.config.json          # 工具配置（appid、云函数根目录）
├── miniprogram/                 # 小程序端代码
│   ├── app.js                   # 全局入口（云环境初始化）
│   ├── app.json                 # 页面路由 + tabBar
│   ├── app.wxss                 # 全局样式（手绘风基础色板）
│   ├── utils/                   # 工具函数
│   └── pages/
│       ├── index/               # 首页：品牌横幅 + 进店入口
│       ├── goods/               # 商品列表（调用云函数 getGoods）
│       ├── cart/                # 购物车（骨架占位）
│       └── mine/                # 我的（骨架占位）
└── cloudfunctions/
    └── getGoods/                # 云函数示例：返回商品数据（当前为演示数据）
```

## 开发约定

- **设计调性**：延续品牌 VI 的简笔画手绘风格，色彩用 `app.wxss` 里的暖色板变量，不要引入现成组件库的默认蓝
- **命名**：页面用小写英文，云函数用动词开头小驼峰（`getGoods` / `createOrder` / `payCallback`）
- **敏感信息**：appid 与环境 ID 可以提交；**密钥类文件绝不入库**（根目录 `.gitignore` 已覆盖）
- 后续模块按 KANBAN.md 三、小程序电商的顺序推进：UI 设计稿 → 商品/下单 → 支付 → 营销扩展

## 下一步

1. 商品页接真实数据（云数据库建 `goods` 集合）
2. 购物车与下单流程
3. 微信支付打通（云开发云函数下单）
