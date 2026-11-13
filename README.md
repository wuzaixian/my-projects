# my-projects

> wuzaixian 的项目合集仓库 —— 一个仓库收纳多个小项目，每个项目一个子目录。

## 📦 目录规划

```
my-projects/
├── passionfruit-app/    # 榕江高山百香果：小程序电商 + Web 管理后台
├── short-video/         # 抖音短视频：果农日常 / 带货素材脚本
└── <新项目>/            # 以后的新项目按此模式添加
```

每个子目录自带三件套：

- `README.md` —— 项目是做什么的、当前进展
- `.gitignore` —— 排除 node_modules、密钥、临时文件
- `docs/` —— 设计稿、教程、交付物说明

## 🔧 使用方式

- **看项目**：进对应子目录读它的 README
- **加新项目**：新建一个子目录（不要把文件直接堆在根目录）
- **本地克隆**：

```bash
git clone https://github.com/wuzaixian/my-projects.git
cd my-projects
```

## ⚠️ 上线前的注意

- 小程序 appid、CloudBase 环境 ID 等可以写在文档里
- 但**密钥、私钥、`.env` 这类敏感文件永远不要提交**（`.gitignore` 已覆盖常见项）

## 📅 更新日志

- 2026-11-13：仓库创建，完善 README 与 .gitignore
