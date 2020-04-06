<a title="MIT" target="_blank" href="https://opensource.org/licenses/MIT"><img src="http://img.shields.io/npm/l/vditor-react"></a>
<a title="vditor-react" target="_blank" href="https://www.npmjs.com/package/vditor-react"><img src="http://img.shields.io/npm/v/vditor-react"></a>

[English version](README.md) | 简体中文

# Vditor for React

[Vditor](https://github.com/Vanessa219/vditor) 是由 [B3log](https://b3log.org) 开发并开源的面向未来的 Markdown 编辑器。这个项目是它的 [React](https://reactjs.org) 封装。

## 安装

<!-- ### 通过 NPM -->

```bash
npm install vditor-react --save
```

## 用法

```jsx
import ReactDOM from 'react-dom'
import Vditor from 'react-vditor'

ReactDOM.render(
	<Vditor height={700} />, 
	document.getElementById('node')
);
```

然后在 HTML 文件中加入对应的 `div` 标签：

```html
<div id="node" />
```

## API

大部分 `props` 会被作为 `options` 用于初始化 Vditor 实例。你可以在 [这里](https://hacpai.com/article/1549638745630) 查看 Vditor 提供的 API。

特别地，`vditor-react` 提供了一部分经过封装的 `props`，如下表所示：

| 名称     | 定义                                   | 默认值      | 描述                                                                                | 对应的 Vditor 接口       |
|----------|-----------------------------------------|----------|-----------------------------------------------------------------------------------|---------------------|
| onInit   | (text: String) => {}                    | () => {} | 在编辑器加载完成后的回调，用于获取编辑器文本的初始值                                                        | options.after       |
| onSelect | (selection: String, text: String) => {} | () => {} | 文本选中情况变更时触发的回调，用户获取当前选中的文本（和当前编辑器文本）                                              | options.select      |
| onInput  | (text: String) => {}                    | () => {} | 用户输入一段文本后的回调，有一定延迟，且 IME 输入法状态下不会触发                                               | options.input       |
| darkMode | Boolean                                 | false    | 是否启用编辑器的暗黑模式                                                                      | options.theme       |
| disabled | Boolean                                 | false    | 是否锁定编辑器区域                                                                         | disabled() enable() |

你还可以继承这一类型并通过 `this.editor` 访问原始的 Vditor 实例。

## 示例

在 `demo/` 目录下提供了一个完整的使用范例，利用 React Hooks 实现了跟随系统 Dark Mode 和一键锁定/解锁编辑器的功能。你可以通过如下指令构建这一范例：

```bash
npm run dev
```

然后在 `http://127.0.0.1:8081` 查看。