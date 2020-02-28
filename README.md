<a title="MIT" target="_blank" href="https://opensource.org/licenses/MIT"><img src="http://img.shields.io/npm/l/vditor-react"></a>
<a title="vditor-react" target="_blank" href="https://www.npmjs.com/package/vditor-react"><img src="http://img.shields.io/npm/v/vditor-react"></a>

# Vditor for React

[Vditor](https://github.com/Vanessa219/vditor) is the next-generation Markdown editor by [HacPai](https://hacpai.com). This package is the [React](https://reactjs.org) wrapper of it. 

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

Then include the `div` tag in the HTML file: 

```html
<div id="node" />
```

## API

The wrapper maps all its `props` into `options` of the original Vditor APIs, which you can access [here](https://hacpai.com/article/1549638745630) (Chinese version only). 

You can also extend this component and access the Vditor instance as `this.editor`. 