/* @flow */
import React, { Component } from 'react';
import RichTextEditor, { createEmptyValue } from './RichTextEditor';
import type {EditorValue } from './RichTextEditor';
import autobind from 'class-autobind';
import EventEmitter from 'events';

type Props = {
    value: string;
    format: string;
    onChange: (value: string) => any;
};
type State = {
    editorValue: EditorValue;
};

export default class JSONRichTextEditor extends RichTextEditor {
    props: Props;
    state: State;
    _keyEmitter: EventEmitter;
    // The [format, value] of what's currently displayed in the <RichTextEditor />
    _currentValue: ?[string, string];

    constructor() {
        super(...arguments);
        autobind(this);
        console.log('args:', arguments);
        this._keyEmitter = new EventEmitter();
        this.state = {
            editorValue: createEmptyValue(),
        };
    }

    componentDidMount() {
        super.componentDidMount();
    }

    _onChange(editorValue: EditorValue) {
        super._onChange(editorValue);
    }

    _customKeyHandler(event: Object) {
        return super._customKeyHandler(event);
    }

    _shouldHidePlaceholder(): boolean {
        return super._shouldHidePlaceholder();
    }

    _handleReturn(event: Object): boolean {
        return super._handleReturn(event);
    }

    _handleReturnSoftNewline(event: Object): boolean {
        return super._handleReturnSoftNewline(event);
    }

    _handleReturnEmptyListItem(): boolean {
        return super._handleReturnEmptyListItem();
    }

    _handleReturnSpecialBlock(): boolean {
        return super._handleReturnSpecialBlock();
    }

    _onTab(event: Object) {
        return super._onTab(event);
    }

    _handleKeyCommand(command: string): boolean {
        return super._handleKeyCommand(command);
    }

    _focus(){
        super._focus();
    }

    render() {
        let {value, format, onChange, ...otherProps} = this.props;

        console.log(element);

        return <RichTextEditor
            {...otherProps}
            value={this.state.editorValue}
            onChange={this._onChange}
            allowJSON={true}
        ></RichTextEditor>;
    }

}