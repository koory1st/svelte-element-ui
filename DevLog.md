# 2020.08.06

svelte-style-system 在用 style 方式处理的时候,不支持用逗号分隔的属性写法,像这样

```javascript
style['_hover,_focus'];
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
