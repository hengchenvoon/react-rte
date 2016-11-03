import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import JSONRichTextEditor from './JSONRichTextEditor';

class MyStatefulEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    value: JSONRichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }

    console.log('onChange value:',value);
  };

  render () {
    return (
      <JSONRichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let rootNode = document.createElement('div');
  document.body.appendChild(rootNode);
  ReactDOM.render(
    <MyStatefulEditor />,
    rootNode,
  );
});
