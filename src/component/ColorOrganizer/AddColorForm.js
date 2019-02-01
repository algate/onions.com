import React, { Component } from 'react'
// PropTypes之前在react中，现在15版本之后，从react中分离出来单独一个插件
import PropTypes from 'prop-types'
import './AddColorForm.scss'

import { Input } from 'antd'
// ES6类组件
export default class AddColorForm extends Component {
  // Solution 2【1】 - 可以不写，上线的时候可以用插件删除-减少代码
  static propTypes = {
    onNewColor: PropTypes.func
  }
  static defaultProps = {
    onNewColor: f => f
  }
  constructor(props) {
    super(props)
    this.state = {
      _title: '',
      _color: '#000000'
    }
    this.submit = this.submit.bind(this)
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeColor = this.onChangeColor.bind(this)
  }
  onChangeTitle(e) {
    this.setState({ _title: e.target.value });
  }
  onChangeColor(e) {
    this.setState({ _color: e.target.value });
  }
  submit(e) {
    // const { _title, _color } = this.refs;
    const { _title, _color } = this.state;
    // e.preventDefault();
    // 该组件是否在调用一个未定义的值
    // Solution 1.通过检查函数属性的存在性来避免
    /* if(this.props.onNewColor){
      this.props.onNewColor(_title.value, _color.value);
    } */
    this.props.onNewColor(_title, _color);
    // Solution 2 在组件的propTypes和defaultProps中定义该函数属性
    // 此处方法有两种写法 【1】使用ts的static设置两个对象值【2】直接定义组件的两个对象值
    // _title = '';
    // _color = '#000000';
    this.setState({ _title: ''});
    this.setState({ _color: '#000000' });
    // _title.focus();
  }
  render() {
    return (
      <form className="add-color" onSubmit={this.submit}>
        {/* <Input ref="_title" */}
        <Input ref={node => this._titleInput = node}
               type="text"
               value={this.state._title}
               onChange={this.onChangeTitle}
               placeholder="color title..." required/>
        {/* <Input ref="_color" */}
        <Input ref={node => this._colorInput = node}
               value={this.state._color}
               onChange={this.onChangeColor}
               type="color" required/>
        <button type="primary">ADD</button>
      </form>
    );
  }
}
// Solution 2【2】 - 可以不写，上线的时候可以用插件删除-减少代码
/* AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

AddColorForm.defaultProps = {
    onNewColor: f=>f
} */
