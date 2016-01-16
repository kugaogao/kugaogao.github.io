---
title: "为jekyll博客添加目录导航"
categories: "jekyll"
tags: "jekyll navigation"
thumbnail: 10.jpg
qiniuurl: http://7xpt1l.com1.z0.glb.clouddn.com/image%2Fnature%2Fphoto-1436407886995-41f8f5ee43ad.jpg
---
实现目录导航功能。
<!--more-->

###一 不借助任何插件实现
在footer.html文件中创建目录归档和标签归档。首先遍历每个目录和每个标签，然后遍历每个目录和标签下的文章生成一个列表。根据官方文档，遍历特定目录下的文章应该使用`site.categories.CATEGORY`，遍历特定标签下的文章例如遍历jekyll目录下的文章应该使用`site.tags.TAG`。

例如遍历目录`jekyll`下的文章应该使用：

	for post in site.categories.jekyll
		<li>post.title</li>
	endfor

遍历标签`cooltec`下的文章应该使用：

	for post in site.tags.cooltec
		<li>post.title</li>
	endfor

遍历所有的标签或目录时，应该注意，`site.tags`中的每一条tag是一个数组。此标签的名字是`tag | first`，此标签中文章的数目是`tag | last | size`。遍历此标签下的所有文章时应该使用如下方式:

	for tag in site.tags 
      assign t= tag | first
      for post in site.tags[t]
		<li>post.title</li>
      endfor
	endfor

列表创建完毕之后，可以用jQuery为`li`标签绑定事件，便于交互。

###二 在独立的页面中创建目录或标签页面
为每一个目录或每一个标签创建一个独立的页面，每一页面中都包含有属于相同目录或标签的所有文章，这种方式很难实现。

####若采用静态页面的方式
例如建立一个categories目录，其中创建一个index.html文件，作为静态页面的显示页面。然后在此目录中创建大量的文件用于索引，有多少目录或多少标签就要手动创建多少页面，在index.html文件中索引这些页面。例如创建一个jekyll.html页面用于jekyll目录的页面导航；创建一个github.html页面用于github标签的页面导航。如能够自动创建这些文件就会好很多。