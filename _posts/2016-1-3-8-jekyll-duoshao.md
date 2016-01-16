---
title: "Jekyll进阶之多说评论系统"
categories: "jekyll"
tags: "jekyll duoshuo"
thumbnail: "7.jpg"
---
利用多说评论系统实现静态博客的评论功能。
<!--more-->

###资源
[官方网站](http://duoshuo.com/)

###使用方法

1. **获取代码**
注册多说账号，从官方获取多说评论框代码。

2. **添加到页面**
我在_includes文件下创建了comments.html文件，将多说HTML代码粘贴其中，再将多说的JS代码添加到了default.html模板中，然后在_layouts文件夹下的my_post.html模板中引用了comments.html文件。所有的模板均用到了default.html模板，而我的博文均使用my_post模板，这样就将多说代码添加到了所有的博文中。

3. **设置**
设置文章id、文章标题、文章链接。多说的HTML放在comments.html文件中，首页没有使用my_post.html模板（也就没有引用comments.html文件），因此没有评论功能。

4. **样式优化**
优化多说评论框的样式使之与站点样式一致。