import React from 'react';

import '../styles/TextButton.less';

interface Props {
  text: string,
  onClick: () => void,
  active?: boolean,
  className?: string
}

interface State {
}

export default class MyCustomButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <button
        className={"text-btn " + this.props.className + (this.props.active ? ' active' : '')}
        onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}