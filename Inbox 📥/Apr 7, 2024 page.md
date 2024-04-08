this week, i plan to use VSCode as my IDE.
Reasons:
- VSCode is lightweight, fast and supporting many languages.
- It supports Github copilot very well.
- It has a huge and powerful extension library.
- It's free, but i will pay even it is not free.

---

Competition 2024

preview modified: 
- preview teammates's report, -- partA: can see all attitude marks.

---
日报 2024-04-07 刘佳希

今日任务：

1. 修复商赛 04-07 文档中提到的 bugs 
  time: 5h
  status: done
  taskId: KNLG-872
  details:
    - 鼠标移动到网站icon，不应该出现查看 icon
    - 预览状态下，PartA 选择没有标记的文本，不应该出现批注弹框
    - 智能搜索点击卡片空白处未跳转
    - AI思辨全是字母或数字的换行问题
    - AI思辨预览时只标记了认同
    - 预览小队成员的词条，在AI思辨处点击添加的溯源，跳转地址错误
    - 帮助视频很难辨认，播放按钮保持常在
    - 【AI智搜】：修改地址栏userId，查看他人报告，若userId不是同组的人员，页面无任何响应（接口已返回错误，但页面未有处理）。
    - AI智搜与AI思辨】到达审核时间后，点击预览进入编辑页面，将地址栏userId删除，则可继续操作

复盘：有一半的改动是因为预览模式下的问题，原因主要是在一开始代码实现阶段，就没考虑周全，第一，没有全局需求的了解，导致不清楚组员也可以预览，第二，没考虑时效问题。在需求梳理阶段，也没有一思维导图或者测试用例去考虑清楚所有的情况。后面在接到需求的时候，先思考再写代码，测试用例即使因为时间问题和不太好写前端测试用例，也要以书面形式写一写 E2E 情况下的期望结果。

明天计划：

暂无，继续测试支持商赛的需求。