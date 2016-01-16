---
title: "如何将本地jekyll项目上传至github并正确配置 一"
categories: "jekyll github"
tags: "jekyll github"
thumbnail: "9.jpg"
---
进展与问题
<!--more-->

###进展

**成功上传并正确访问**
按照教程将本地的jekyll博客项目上传到mooncity的gh-pages分支。访问http://kugaogao.github.io/mooncity可以访问博客页面。具体步骤参考[推酷](http://segmentfault.com/a/1190000000406019)。

**修改设置使之正确加载CSS文件**
将_congfig.yml文件中的`baseurl`赋值为`/mooncity`，将url变量赋值为`http://kugaogao.github.io`。将所有用到`site.url`地方修改为`site.baseurl`，在`post.url`之前追加`site.baseurl`，在`album.url`之前追加`site.baseurl`。本地运行博客的时候使用命令`jekyll server --baseurl ''`，这样对配置文件的修改就不会影响本地博客的运行。详情参考[官方文档](http://jekyllcn.com/docs/github-pages/)。

###出现的问题

**在github上对文件的修改很久之后才能看到效果**
昨天晚上十一点之前修改配置文件，大概十分钟之后博客页面才有改变。十一点之后的修改到现在也没有改变。


**再次向mooncity的gh-pages分支传送文件时出现问题**
按照[教程](http://segmentfault.com/a/1190000000406019)操作，出现错误，提示信息为：

>failed to push some refs to ...

错误的原因可能是远程工程包含一些本地没有的文件。我查看mooncity仓库的gh-pages分支，的确发现了一些本地没有的文件如READMDE.md文件和CNAME文件。我删除了在线的README.md文件并在本地目录新建了CNAME文件，并把修改提交到了本地库。再次上传仍然失败。

###一些措施

**建立测试文件夹**
为了对本地博客造成影响，myblog目录用于正常使用，新建testblog用于测试。这两个不能同时用jekyll运行否则会提示错误。

**关于上传失败问题**
在测试目录下新建了README.md文件和CNAME文件，add commit 并且 push，仍然提交失败。Google搜索，参考教程[Conquer](http://www.cnblogs.com/renkangke/archive/2013/05/31/conquerAndroid.html)，使用命令`git push -f origin gh-pages`强行覆盖远程目录，成功上传。

**删掉全部图片**
为了缩短上传时间，将测试目录下的图片全部删掉。

