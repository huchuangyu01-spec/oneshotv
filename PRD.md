项目需求文档(PRD): OneShotV - AI 视频创作SaaS 平台
日期 ： 2026-01-18 项目类型：全栈Web 应用(SaaS) 核心能力：基于Sora 2 API 的影视级视频生成与运镜控制

1. 项目愿景与定位
OneShotV旨在为专业视频创作者（广告导演、剪辑师、AMV 作者）提供一个精确控制的AI 视频生产环境。 与市面上的“盲盒式”生成器不同，OneShotV 强调**“导演感”**，通过可视化的运镜控制（Camera Control）和分镜脚本（Storyboard）逻辑，让用户像操作非编软件一样生成AI 视频。

2. UI/UX 设计规范(视觉核心)
设计关键词： Liquid (液态)、Glassmorphism (磨砂玻璃)、Cinematic (电影感)、Clean (洁净)

A. 背景与氛围(The Atmosphere)
严禁使用：电视噪点、复古颗粒、扫描线等“脏”质感。

背景要求： 动态液态流动(Liquid Flow) 。

使用WebGL 或CSS 高级混合模式，模拟深海暗流、液态金属或极光在黑色背景中缓慢涌动的效果。

颜色倾向：极深的黑色基底(#030303 ) 搭配幽灵绿( #00FFA3) 或深靛蓝( #4F46E5) 的流动光斑。

光影逻辑：界面元素应看起来是漂浮在液态背景之上的“玻璃片”。

B. 材质与控件(Material)
磨砂玻璃：所有卡片、侧边栏、弹窗必须使用高斯模糊(Backdrop Blur > 20px) + 低透明度白/黑填充+ 极细的半透明描边(1px Border, 10% Opacity)。

微交互：按钮Hover 时应有辉光(Glow) 扩散效果，而非简单的变色。

3. 功能架构与页面需求
本项目包含5 个核心视图（SPA 单页应用架构推荐）+ 1 个全局鉴权模块。

3.1 创作台(The Studio) -核心页面
用户停留时间最长的生产力界面。

布局：三栏式布局（左侧资源/中间舞台/右侧参数）。

中间舞台(The Stage)：

超大预览区：默认展示占位符或上次生成的视频。

Prompt 输入框：位于底部或中心，支持多行输入，带有“AI 润色(Enhance)”按钮。

右侧控制面板(Inspector) - 核心差异点：

运镜控制盘(Camera Grid)： 3x3 九宫格按钮（左上、上、右上...）。

交互强制要求：当鼠标悬停在运镜按钮（如“Pan Right”）上时，按钮背景必须播放一段对应的动态预览视频/动图，直观展示该运镜效果。

参数滑块：运动强度(Intensity)、时长(Duration)、比例(Aspect Ratio)。

底部：生成按钮(Generate)，需带有Loading 态（流光进度条）。

3.2 社区画廊(Gallery / Share)
布局：瀑布流(Masonry) 布局。

内容：展示高质量的用户生成视频。

交互：

鼠标悬停卡片时自动静音播放视频。

“一键同款” (Remix/Copy Prompt)：点击后直接跳转回创作台并填入对应的Prompt 和运镜参数。

3.3 订阅价格(Pricing)
展示：三个玻璃卡片(Free / Director Pro / Studio)。

Pro 版高亮：必须在视觉上突出Pro 版（如使用流光边框），强调权益：

Sora 2 原生运镜控制。

1080p 高清插帧。

无水印商用。

3.4 帮助文档(Docs)
布局：经典的左侧目录树+ 右侧正文。

内容：包含快捷键说明、Prompt 编写指南、运镜参数详解。

样式：保持暗黑风格，代码块高亮，排版清晰。

3.5 用户鉴权(Auth System)
形态： 全局模态框(Global Modal)，而非独立跳转页面。用户在任何页面点击“登录”均弹出玻璃质感窗口。

方式：手机号验证码(优先) + 邮箱密码。

逻辑：登录态持久化，未登录用户每日限制生成1 次（引导注册）。

3.6 个人中心(Dashboard/Profile)
功能：查看历史生成记录、下载无水印视频、管理订阅状态、绑定API Key（如需）。

4. 技术栈推荐(Technical Stack)
前端(Frontend):

框架： Next.js 14+ (React) —— 保证SEO 和高性能。

样式： Tailwind CSS —— 快速实现复杂的布局。

动画： Framer Motion —— 实现丝滑的液态背景和卡片进出场动画。

状态管理： Zustand 或React Context。

后端(Backend):

语言： Python (FastAPI/Flask) 或Node.js。

核心逻辑：

接收前端请求-> 调用n8n Webhook / Sora API -> 处理回调-> 返回视频URL。

数据库： PostgreSQL / Supabase (存储用户数据、Prompt 历史、积分余额)。

部署(Deployment):

Vercel (前端) + Railway/AWS (后端)。

5. 交互与性能指标(KPIs)
首屏加载： < 1.5秒。

动画帧率：液态背景在主流设备上必须保持60fps 流畅运行，不卡顿。

响应式：必须完美适配桌面端(Desktop) 和平板(iPad Pro)，移动端做降级适配。

反馈机制：点击生成后，必须给用户明确的“正在连接服务器...”及“渲染中”的状态反馈，不能假死。

6. 交付物清单(Deliverables)
Figma 设计源文件：包含所有页面的高保真UI 设计稿及Design System（颜色、字体、圆角规范）。

源代码：也就是前后端完整代码库(Git Repository)。

部署文档：如何在服务器上配置环境并运行的说明书。

API 文档：前端与后端交互的接口定义(Swagger/Postman)。