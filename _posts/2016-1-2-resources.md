---
title: "Jekyll 官方文档学习——资源(assets)"
categories: "jekyll document"
tags: "jekyll资源"
thumbnail: 11.jpg
---
Jekyll 提供了对 Sass 和 CoffeeScript 的内建支持。使用时只需创建以 .sass、.scss 或 .coffee 为扩展名的文件，并以两行 --- 开头即可，例如：<!--more-->

    ---

    ---
    //start content
    .my-definition
      font-size:1.2em

Jekyll 将这些文件的输出存放在同一目录下，例如网站源目录下的 `css/styles.scss`，Jekyll 会处理生成网站目标目录下的 `css/styles.css`

###一 Sass/SCSS