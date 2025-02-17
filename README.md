# 个人在线简历项目

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fyourdomain.com)](https://cv.sanxiaoxing.cn)

基于 [Rxresume](https://rxresu.me/) 构建的专业个人简历页面，支持响应式设计和多模板切换，已通过 GitHub Pages 实现自动化部署。

➡️ [**在线访问**](https://cv.sanxiaoxing.cn) | 📥 [原始模板](https://rxresu.me)

## ✨ 核心优势

- **云端加速** - 基于Vercel边缘网络实现<300ms全球访问
- **多端同步** - 自动生成PDF/HTML/PNG多版本
- **版本追溯** - 通过Git历史记录修改轨迹
- **隐私保护** - 本地化数据存储，零第三方追踪

## 🚀 快速开始

1. 访问 [Rxresume 官网](https://rxresu.me/)
2. 选择「Start with Template」使用推荐模板
3. 在线编辑选择分享并复制链接

## 🛠️ 本地开发

1. 在浏览器中安装插件[SingleFile](https://github.com/gildas-lormeau/SingleFile)
2. 访问你的简历页面并点击扩展图标
3. 选择"保存为HTML"生成离线版本
4. 在 VSCode 中更改内容或增加 `js` 样式

## 📁目录结构

```
Resume/								# 根目录
├─ .gitignore
├─ README.md						# 本仓库说明文档
├─ assets/							# 存放图标或字体资源文件夹
│  └─ favicon.svg
├─ index.html						# 主界面
└─ vercel.json						# Vercel 必要路由配置
```

## 🌐 部署流程

[![Vercel部署](https://img.shields.io/badge/%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2-Vercel-black?logo=vercel)](https://vercel.com/)

1. 在Vercel控制台导入GitHub仓库
2. 配置构建
3. 绑定自定义域名 `cv.sanxiaoxing.com`

## ⚠️ 注意事项

1. 修改CSS样式时注意媒体查询断点
2. PDF导出建议使用Chrome无头模式
3. 移动端预览需禁用浏览器缩放功能
4. 敏感信息建议使用环境变量存储

---

[![知识共享协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
本作品采用[知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)进行许可。

*文档最后更新：2025年2月17日*

*维护者：SanXiaoXing*

