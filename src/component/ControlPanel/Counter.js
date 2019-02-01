import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { Button } from 'antd-mobile';
import { Button } from 'antd';

class Counter extends Component {
  // 1.创建组件类实例
    // 1.1一初始化state
    // 1.2绑定成员函数的this环境
  constructor(props) {
    super(props);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.state = {
      count: props.initValue
    };
    // console.log('enter constructor:' + this.props.caption);
  }
  /*onClickIncrementButton () {
    this.setState({
      count: this.state.count + 1
    })
  }
  onClickDecrementButton () {
    this.setState({
      count: this.state.count - 1
    })
  }*/
  onClickIncrementButton () {
    this.updateCount(true);
  }
  onClickDecrementButton () {
    this.updateCount(false);
  }
  updateCount(isIncrement) {
    const previousValue = this.state.count;
    const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
    this.setState({count: newValue});
    this.props.onUpdate(newValue, previousValue);
  }
  // 2.render函数之前被调用就是将要装载的时候
  componentWillMount() {
    // console.log('enter componentWillMount:' + this.props.caption);
  }
  // 3.render函数不做实际的渲染动作，只是返回一个jsx描述的机构，交给react库来渲染
  render() {
    const {caption} = this.props;
    // ES6 的解构赋值语法，从this.props 中获得了名为 caption 的 prop 值
    // console.log('enter render:' + caption);
    return (
      <div>
        <Button type="primary" size="small" onClick={this.onClickIncrementButton}> + </Button>
        <Button type="primary" size="small" onClick={this.onClickDecrementButton}> - </Button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
  // 4.render函数返回的jsx描述结构渲染之后，即组件已经被装载到DOM树上
  componentDidMount() {
    // console.log('enter componentDidMount:' + this.props.caption);
  }
  // 5.React组件卸载过程
  componentWillUnmount() {
    // console.log('enter componentWillUnmount');
  }
  // 更新过程update
  componentWillReceiveProps() {
    // console.log('enter componentWillReceiveProps:' + this.props.caption);
  }
  // shouldComponentUpdate和render函数,是React生命周期函数中唯二两个要求有返回结果的函数
  // render 函数的返回结果将用于构造DOM对象,
  // 而shouldComponentUpdate函数返回一个布尔值,告诉React 库这个组件在这次更新过程中是否要继续
  // 如果这个函数返回true,那就会继续更新过程，接下来调用 render 函数；反之,如果得到一个false ，那就立刻停止更新过程，也就不会引发后续的渲染了
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('enter shouldComponentUpdate:' + this.props.caption);
    // return false;
    // return true;
    return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
  }
  // shouldComponentUpdate返回true的时候才会继续进入后续步骤的。
  // update引起的render之前的更新，但是不会引起页面的渲染也就是DOM被装载之前
  componentWillUpdate() {
    // console.log('enter componentWillUpdate:' + this.props.caption);
  }
  // render - update 引发render函数，不会渲染，页面返回jsx描述结构交给react库来进行渲染
  // render 返回的jsx描述结构渲染， DOM装载之后进行的操作
  componentDidUpdate() {
    // console.log('enter componentDidUpdate:' + this.props.caption);
  }
}
Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number,
  onUpdate: PropTypes.func
};
Counter.defaultProps = {
  initValue: 0,
  onUpdate: f => f
};
export default Counter;
