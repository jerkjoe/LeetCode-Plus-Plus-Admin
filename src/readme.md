# 文件结构

- src
  - styles -> 样式文件夹 - 存放公共样式
  - App.tsx -> React 主组件
  - index.tsx -> 入口文件
  - index.scss -> 全局 CSS 
  - pages -> 所有页面文件夹
    - <page_name> -> 页面文件夹
    - <page_name>.tsx -> 单一页面
    - <page_name>.scss -> 单一页面样式
    - <page_component_name>.tsx -> 单一页面内使用的组件
  - components -> 可复用的组件，如果只用一次的组件可以放在pages里的文件夹里
  - utils
    - 可以复用的功能函数
    - 可以抽象出来的功能逻辑

注：以后多出来的模块可以新增对应的文件夹，但需要更新此文档
