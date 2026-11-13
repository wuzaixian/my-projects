# cloudfunctions —— 云函数目录

| 函数 | 作用 | 状态 |
|---|---|---|
| `getGoods` | 商品列表（当前演示数据，待接云数据库） | 骨架 |

## 约定

- 每个云函数一个子目录，含 `index.js` + `package.json`
- 新函数命名：动词开头小驼峰，如 `createOrder` / `payCallback` / `adminLogin`
- 部署：微信开发者工具右键函数目录 →「上传并部署：云端安装依赖」
- Web 管理后台共用的函数（如 `login_admin`）也放这里，两边共用一个云环境
