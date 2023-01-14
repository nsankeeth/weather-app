import React from 'react';

import './TextButton.less';

interface Props {
  text: string,
  onClick: () => void,
  active?: boolean
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
        className={"text-btn" + (this.props.active ? ' active' : '')}
        onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}