import React from 'react';
import VditorX from 'vditor';

import 'vditor/src/assets/scss/index.scss';

export default class Vditor extends React.Component {

    componentDidMount() {
        this.editor = new VditorX('editor', {
            ...this.props,
            height: this.props.height ?? 'auto',
            placeholder: this.props.placeholder ?? 'Welcome to Vditor for React!'
        });
    }

    render() {
        return (
            <div id="editor" />
        );
    }

}