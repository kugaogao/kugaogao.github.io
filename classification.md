---
layout: default
title: "归档"
permalink: /classification/
---
<!--specially for classification page-->
<div class="footer-col-wrapper">
      <div class="footer-col footer-col-1">
        <h3>站点信息</h3>
        <ul class="contact-list">
          <li>{{ site.title }}</li>
          <li><a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
          <li><a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></li>
        </ul>
</div>

<div class="footer-col footer-col-2">
        <h3>标签</h3>
        <ul class="tags">
          {% for tag in site.tags %}
            <li>{{ tag  | first }}<span>{{ tag | last | size }}</span>
            {% assign t =tag | first ) %}
            <ul class="kids">
              {% for post in site.tags[t] %}
                <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
              {% endfor %}
            </ul>
            </li>
          {% endfor %}
        </ul>
</div>

<div class="footer-col footer-col-3">
        <h3>目录</h3>
        <ul class="categories">
          {% for ca in site.categories %}
            <li>{{ ca | first }}<span>{{ ca | last | size }}</span>
            {% assign category =ca | first ) %}
            <ul class="kids">
              {% for post in site.categories[category] %}
                <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
              {% endfor %}
            </ul>
            </li>
          {% endfor %}
        <ul>
</div>
</div>