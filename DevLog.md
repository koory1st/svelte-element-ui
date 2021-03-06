# 2021.02.10

Menu的打开状态控制遇到了极大的难题。

假设有ABC三层submenu。

> A -> B -> C

那么光标有以下几种情况

A -> B： A打开，B打开

A -> 空白： A关闭，B关闭

B -> C：A打开，B打开，C打开

B -> A： A打开

B -> 空白： 全关闭



# 2021.01.29

开发Menu中，期间遇到比较多的技术和设计问题，大部分都是因为svelte和vue的差异造成的。

首先svelte无法访问父组件，这样就不能通过slot的去控制上层的menu的状态。为了解决这个问题，我用了context里面装了个store，store是一个menu对象，通过子读取store里的这个对象，然后进行操作，来实现，子组件或者slot去控制上层父组件。

另一个是svelte的默认transition是基于if判断是否渲染组件的，没有类似vue的v-show的控制，这样的话在处理menu折叠（collapse）的时候会让部分内容选择性渲染，那么在处理menu及子节点关系的时候会有大量的操作节点（增，删）的逻辑。我找到了一个[svelte-collapse库](https://www.npmjs.com/package/svelte-collapse?activeTab=readme)来方便的实现展开折叠功能。不过这个库是基于js的，我同时略微的写了一个d.ts保证引入不报错。

还有一个就是pop组件的问题，element-ui是用的是用vue包裹的popper-js，既vue-popper实现的。popper-js在npm上有3个，我尝试了2个，包括popperjs的[官方svelte版本](https://github.com/popperjs/svelte-popper)，由于各种各样的问题，我选择了更方便的非官方的依靠svelte的use特性实现的[svlete-popper-js](https://github.com/bryanmylee/svelte-popperjs)。但是在处理popperjs的options时，发现这个包实现的有些问题，我提了个issue，然后为了快速继续开发，我在自己的包里实现了一遍他的逻辑，同时按照自己需要的一些需求略微的改动了一下。

再有一个就是appendToBody的功能。我记得React上有个Portal的高阶组件可以实现把组件直接渲染到指定的dom层级，就尝试的用svelte和portal两个关键字搜索了一下，发现真的[有这个库](https://github.com/romkor/svelte-portal)，同时看了一下实现，也是比较简单的。然后就直接用了这个库了。后来听说vue3也支持这个高阶组件了，名字叫teleport，哈哈，为了不一样真是绞尽脑汁了吧。

# 2021.01.28

I'm developing the menu component right now, because there is no slide bar menu component for the site which I want to develop.

# 2021.01.27

Svelte 的 API 里有这么一句，关于 context 的，很有帮助。

> Context is not inherently reactive. If you need reactive values in context then you can pass a store into context, which _will_ be reactive.

# 2021.01.21

尝试将 test 改成 ts，结果报错：

```
error TS2593: Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i @types/jest` or `npm i @types/mocha` and then add `jest` or `mocha` to the types field in your tsconfig.
```

在网上找到的解决方案是,https://daveceddia.com/svelte-typescript-jest/

tsconfig.json 里加入，确实可以解决问题。

```json
{
  "compilerOptions": {
    "types": ["jest"]
  }
}
```

但是 build 就开始报错了。大概原因应该是我把全局的唯一的一个 tsconfig 给改了，svelte 也需要这个 tsconfig，结果就报错了。
那么就应该维持总体的 tsconfig 不动，改掉走 test 的时候的 tsconfig 就好了。至于怎么弄，又是一顿查。

首先我用的是 testing-library，那么就查他，是关于 typescript 的，找到那个位置https://testing-library.com/docs/svelte-testing-library/setup。

这里写是用 svelte-jester 处理的，那么就继续找他。https://github.com/mihar-22/svelte-jester#typescript。关于ts部分，这里写查看ts-jest的文档。

继续找 ts-jest 的文档：https://kulshekhar.github.io/ts-jest/docs/options。这里写了如何配置ts。

其中有一处配置 tsconfig 的部分。https://kulshekhar.github.io/ts-jest/docs/options/tsconfig/

```json
// OR package.json
{
  // [...]
  "jest": {
    "globals": {
      "ts-jest": {
        "tsconfig": "tsconfig.test.json"
      }
    }
  }
}
```

然后呢，我就新建了一个 tsconfig 文件，放到了\_\_test\_\_文件夹下。内容呢就是：

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "types": ["jest"]
  }
}
```

这样呢，再 test，build，就都没有问题了。

# 2021.01.20

昨天已经发布了第一版，还算成功。

TODO:

- [x] 使用 ts 重写 test
- [x] readme 里添加使用方式
- [x] 修改文件夹名

# 2021.01.19

TODO:

- [x] 整理 dependencies
- [x] 丰富 package 内容
- [x] github action
- [x] d.ts
- [ ] 分别打包

# 2021.01.16

Today is satday, and it took me a half day to finish the checkbox's problems.

# 2021.01.14

在工程里又开了个 svele app 调用组件，方便调试。

# 2021.01.12

- [x] All component's class logic
- [x] checkbox group's max and min
- [x] checkbox group's type
- [x] checkbox group and radio group's name to control arrow key
- [x] checkbox's focus test
- [x] radio's focus test
- [x] radio's slot test
- [ ] svelte-doc
- [x] release 1.0.0

# 2020.12.31

在使用 testing-liberary 写测试。
写到 checkbox 的时候，发现奇怪的事情
input 里的 boolean 类型的 disabled 属性，会被渲染成 disabled=""。我在浏览器里编辑 html，把写上 disabled=""，控件就变成可用了。不科学啊。

然后我就写了个 html

```html
<input type="text" disabled="" />
```

浏览器打开后，发现，会被浏览器渲染成

```html
<input type="text" disabled />
```

控件的可用状态也是对的，真是见了鬼了。

# 2020.10.22

代码量越来越大了,把 checkbox 写完之后必须把单元测试加进来了.
感觉使用 Typescript 有点驾驭不了,生态方面未必能支持的很好,比如单元测试框架可能就不行.有必要的话再还原回 js 实现.

# 2020.09.17

原本准备把样式都用 css 重写,发现需要关注的东西实在是太多了,css 处理起来也不够灵活.这个超级大工作量实在是自己一个人无法完成也没有必要去完成的.所以直接把 element-ui 的样式 scss 直接拿过来了,配置进 rollup 里.

# 2020.09.12

svelte 的 gitbub 上已经添加了\$\$slot 的支持,但是仍为发布,等待发布,把 radio 加上判断是否有 slot,没有的话就用 label(DONE)

# 2020.09.09

在做 radio 的过程中,发现 element ui 的 dom 结构里, label 里的 input 层级太深了,导致使用 svelte 的时候被插件警告.警告不能忍,所以把层级修改成正常的,但是结果就是样式需要自己调整了.

另外在做 tabindex 的时候发现不好用了,原因是自己的 keydown 事件逻辑写错了,导致 tab 被按下之后 也 prevent default 了,本应该只控制空格被按下的.

- 感觉有必要把整体的样式控制加上,用 css 变量实现
- radio 里还有好多的 size 样式,头疼

# 2020.09.02

准备把 storybook 的静态页面发布到 github 的 page 上.

- 先用**_build-storybook_**执行了一次,成功的输出到 storybook-static 文件夹中

- 在 github 上配置 page,发现只能配置到**_/_**或者**/docs**文件夹里,只能让 storybook 输出到/docs 文件夹里了

- 查找 storybook 的主页,查到了 api:https://storybook.js.org/docs/react/api/cli-options,使用-o /docs 输出到 docs 文件夹

- 但是执行时提示建立 docs 报错 EROFS: read-only file system, mkdir '/docs',想起之前升级 npm 的时候也提示错误,以为是没有权限的问题,查找 sof,https://stackoverflow.com/questions/47252451/permission-denied-when-installing-npm-modules-in-osx,使用以下命令之后权限问题解决.

  ```bash
  sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
  ```

- 但是 EROFS: read-only file system, mkdir '/docs 问题仍然存在

- 只能手动创建好文件夹了,然后-o docs,竟然好用了.

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

- [添加测试方式](https://testing-library.com/docs/svelte-testing-library/intro)
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
