<a title="MIT" target="_blank" href="https://opensource.org/licenses/MIT"><img src="http://img.shields.io/npm/l/vditor-react"></a>
<a title="vditor-react" target="_blank" href="https://www.npmjs.com/package/vditor-react"><img src="http://img.shields.io/npm/v/vditor-react"></a>

English version | [简体中文](README-zh_CN.md)

# Vditor for React

[Vditor](https://github.com/Vanessa219/vditor) is the next-generation Markdown editor open-sourced by [B3log](https://b3log.org). This project is the [React](https://reactjs.org) wrapper of it. 

## Installation

<!-- ### By NPM -->

```bash
npm install vditor-react --save
```

## Usage

```jsx
import ReactDOM from 'react-dom'
import Vditor from 'react-vditor'

ReactDOM.render(
	<Vditor height={700} />, 
	document.getElementById('node')
);
```

Then include the specific `div` tag in the HTML file: 

```html
<div id="node" />
```

## API

`vditor-react` maps most of its `props` into `options` of the original Vditor APIs, which you can access [here](https://hacpai.com/article/1549638745630) (Chinese version only). 

`vditor-react` also provides some `props` to improve the React practice, which are as follow:

| Name     | Definition                              | Default  | Description                                                                                                                                  | Deprecated Vditor API |
|----------|-----------------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| onInit   | (text: String) => {}                    | () => {} | Called after the editor UI has been loaded, with the initial text.                                                                           | options.after         |
| onSelect | (selection: String, text: String) => {} | () => {} | Called when the text selection is updated, with the selected text and the full text.                                                         | options.select        |
| onInput  | (text: String) => {}                    | () => {} | Called shortly after text inputs, with the full text. It won’t be called during an IME composition.                                          | options.input         |
| darkMode | Boolean                                 | false    | Whether the editor UI is in dark mode.                                                                                                       | options.theme         |
| disabled | Boolean                                 | false    | Whether to disable the editor (the bar cannot be disabled so far, reported in this [issue](https://github.com/Vanessa219/vditor/issues/197)).  | disabled() enable()   |

You can also extend this component and access the Vditor instance as `this.editor`. 

## Example

There is a demo under `demo/` with full functionalities of `vditor-react`, and it also implements system-wide (browser-wide) Dark Mode support and an 'Enable/Disable' switch with React Hooks. 

You can start the demo by the following command: 

```bash
npm run dev
```

Then open the browser and check it out in `http://127.0.0.1:8081`. 