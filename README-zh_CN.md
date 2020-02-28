<a title="MIT" target="_blank" href="https://opensource.org/licenses/MIT"><img src="http://img.shields.io/npm/l/vditor-react"></a>
<a title="vditor-react" target="_blank" href="https://www.npmjs.com/package/vditor-react"><img src="http://img.shields.io/npm/v/vditor-react"></a>

[English version](README.md) | 简体中文

# Vditor for React

[Vditor](https://github.com/Vanessa219/vditor) 是由 [黑客派](https://hacpai.com) 开发的面向未来的 Markdown 编辑器。这个项目是它的  [React](https://reactjs.org) 封装。

## 安装
<!-- ### 通过 NPM -->

```bash
npm install vditor-react --save
```

## 使用

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

所有的 `props` 都会被作为 `options` 用于初始化 Vditor 实例。你可以在 [这里](https://hacpai.com/article/1549638745630) 查看 Vditor 提供的 API。 

你还可以继承这一类型并通过 `this.editor` 访问原始的 Vditor 实例。