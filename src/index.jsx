import React from 'react';
import VditorX from 'vditor';

import 'vditor/src/assets/scss/index.scss';

export default class Vditor extends React.Component {

    componentDidMount = () => {
        this.editor = new VditorX('editor', {
            ...this.props,
            after: () => {
                if (this.props.onInit) this.props.onInit(this.editor.getValue());
                if (this.props.disabled) this.editor.disabled();
            },
            input: (text, html) => {
                this.setState({text: text}, () => {
                    if (this.props.onInput) this.props.onInput(text, html ?? this.editor.getHTML());
                });
            },
            select: () => {
                if (this.props.onSelect) this.props.onSelect(this.editor.getSelection(), this.editor.getValue());
            },
            theme: this.props.darkMode ? 'dark' : 'classic',
            placeholder: this.props.placeholder ?? 'Welcome to Vditor for React!'
        });
    }

    shouldComponentUpdate = (props) => {
        if (props.darkMode != this.props.darkMode) {
            this.editor.setTheme(props.darkMode ? 'dark' : 'classic');
        }
        if (props.disabled != this.props.disabled) {
            props.disabled ? this.editor.disabled() : this.editor.enable();
        }
        if (props.value != this.props.value && props.value != this.state.text) {
            this.editor.setValue(props.value);
        }
        return false;
    }

    render() {
        return (
            <div id="editor" />
        );
    }
}