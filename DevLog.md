# 2020.09.01

一个动态加载 svelte 组件的库:https://github.com/kaisermann/svelte-loadable

# 2020.08.31

使用了 rollup-plugin-copy,将 element 的字体文件复制到了 dist 文件里,利用 element 的 font 的 css,直接让 icon 好用了.惊喜.

- TODO 不知为什么,在 vscode 里,使用了 ts,总是用 ts 验证 js 里有一些错误.如果加上

```json
"javascript.validate.enable": false
```

这样连 js 都无法验证了,之后试试使用 eslint 验证

# 2020.08.30

基本完成 layout 部分的逻辑和 storybook 的展示逻辑. 未实现的是 col 的 tag 变量,暂时未找到 svelte 有相关的处理.

# 2020.08.27

实现了 layout 部分(row 和 col),使用的是 css 变量的方式

# 2020.08.20

使用 svelte 的 template 把本项目升级成支持 typescript.

稍微学习了一下 rollup,感觉内容不是很多,剩下的以后慢慢熟悉吧.

因为这个是 ui 组件项目,所以,感觉把样式写在组件里的话,那么一个页面里使用了好几个同一个组件,那么代码岂不是写了好几遍?

不过呢,使用 svelte 的 plugin 把 style 抽出去到单独的 css 文件应该就可以了,使用这些组件的时候需要单独引入 css 文件,element ui 就是这么个套路.

然后把之前的 button 的样式也抽出到 css 文件里.这个 css 文件呢在入口里 import,但是用 rollup 打包默认不支持,只能再引入 postcss 的 plugin.

最后就是这个样子的.

之后会重新实现一下其他的之前的组件.

- TODO: [添加测试方式](https://testing-library.com/docs/svelte-testing-library/intro)
- DONE: [使用变量实现动态样式](https://css-tricks.com/what-i-like-about-writing-styles-with-svelte/)
- DONE: 在本项目里使用 storybook(之前是吧 storybook 写到了另一个项目)
- DONE: 在 storybook 里启用 knobs
- TODO: 用 rollup 工作流,先 build 代码,然后启动 storybook 服务
- TODO: 用 rollup 工作流,先 build 代码,然后 build storybook 代码

# 2020.08.13

不会用 rollup, 遇到了在项目里导入图标的问题.弄了半天也没成功导入到项目里.

# 2020.08.06

svelte-style-system 在用 style 方式处理的时候,不支持用逗号分隔的属性写法,像这样

```javascript
style['_hover,_focus']
```

造成了写 button 样式的时候,不得不把相同的 hover 和 focus 分开写.

而分开写又发现了一个诡异的 css 问题:active 的动作产生的样式会被 focus 样式覆盖掉.

在网上搜索了一圈没找到有问这个问题的.无奈只能把 hover 和 focus 写到一起.

所以不得已拉下来了 svelte-style-system 的源码,改了一下,支持了用逗号分隔的样式写法.只是小改了一下

由

```javacript
if (cssProp.startsWith("_")) {
  cssProp = cssProp.replace("_", "&:");
  cssText += `${cssProp} { ${createCssText(value, theme, cssProp)} }`;
  continue;
}
```

改成

```javacript
if (cssProp.includes('_')) {
  cssProp = cssProp.replace(/_/g, '&:');
  cssText += `${cssProp} { ${createCssText(value, theme, cssProp)} }`;
  continue;
}

```

# 2020.07.28

又查了一下 css in js 的内容，感觉还是靠谱的。

# 2020.07.27

在实现 button 部分时，button 的各种 type，结合着不同的状态导致的样式非常多样，一组又一组的样式组合，编码的时候弄的非常的烦，弄出来的代码也显得非常丑陋，不过真的想不出什么好方式来实现。

# 2020.07.15

之前略微实现了 elementUI 的 row 和 col 部分。

由于 elementUI 使用的 scss，我在 svelte 里弄的很别扭，在网上又发现了 svelte-style-system 这个东西，所以就把 scss 部分的逻辑全部用 js 实现了。目前不知道运行效率如何。

svelte-style-system 是使用 goober 这个不到 1k 的轻量级 css in js 框架实现的，感觉又打开了一扇前端的大门。
