import React, { Component } from 'react'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import { v4 } from 'uuid'

export default class ColorOrganizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: []
    }
    this.addColor = this.addColor.bind(this)
    this.onRate = this.onRate.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }
  addColor(title, color) {
    // console.log(title.value, color.value);
    console.log(title, color);
    this.setState((prevState, props) => ({
      // 扩展运算符合并数组
      colors: [
        ...prevState.colors,
        {
          id: v4(),
          // title: title.value,
          // color: color.value,
          title,
          // 此处为color，导致ColorList通过解构赋值时与color冲突
          // color,
          hue: color,
          rating: 0
        }
      ]
    }))
    /* this.setState((prevState, props) => {
      // 扩展运算符合并数组
      return ({colors: [
        ...prevState.colors,
        {
          id: v4(),
          // title: title.value,
          // hue: color.value,
          title,
          color,
          rating: 0
        }
      ]})
    },()=>{console.log(this.state)}) */
  }
  removeColor(id) {
    this.setState((prevState, props)=>({
      colors: prevState.colors.filter(color => color.id !== id)
    }))
  }
  onRate(id, rating) {
    console.log(id, rating);
    this.setState((prevState, props) => ({
      colors: prevState.colors.map(color => (color.id === id) ? {...color, rating} : color)
    }))
  }
  render() {
    const { colors } = this.state
    return (
      <div className="region">
        {/* AddColorForm使用ES6类组件 */}
        <AddColorForm onNewColor={this.addColor} />
        {/* ColorList使用无状态函数式组件 */}
        <ColorList onRemove={this.removeColor} colors={colors} onRate={this.onRate}/>
      </div>
    )
  }
}
