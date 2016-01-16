---
title: "翁天信博客布局分析"
categories: "layout"
tags: "layout design"
thumbnail: 8.jpg
qiniuurl: 
---
翁天信最新版博客布局分析。
<!--more-->

左右两栏布局，**左侧栏**`：width:33.3%;position:fixed;`，内容有网站信息、图标形式的页面导航、个人介绍、热门评论、作品集、版权信息，除作品集背景透明度降低以突出重点外各部分样式相差不大。设计风格为背景图片、半透明底、白字。交互效果为鼠标滑过，内容滚动。在小屏幕设备上此栏位于页面头部，内容为站点标题和页面导航，其他内容得到隐藏。**右侧栏**：html

	<div id="main" class="container"></div>

style

	#main{
		margin-left: 33.3%;
		max-width: 66.6%;
		padding: 4em;
		width: calc(100%-33.3%);
	}

内容为五篇博文，博文之间没有明显的样式界限，控制其填充距即可。每篇博文分为左右两栏，左栏有标题、摘要、发布时间、评论数，右栏为缩略图。标题颜色`color:#333;`，摘要颜色`color:#555;`，博文信息颜色`color:#888;`
**位于最右侧的评论栏**：
