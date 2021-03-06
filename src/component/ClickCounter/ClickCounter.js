import React, { Component } from 'react';
import { Button } from 'antd';
class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = {
      count: 0
    };
  }
  onClickButton () {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div className="region">
        <Button type="primary" size="small" onClick={this.onClickButton}>Click me!</Button>
        <div>
          click count: {this.state.count}
        </div>
      </div>
    );
  }
}

export default ClickCounter;
