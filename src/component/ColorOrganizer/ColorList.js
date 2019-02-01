import React from 'react'
// import PropTypes from 'prop-types'
import StarRating from './StarRating'
import './ColorList.scss'

import { Button } from 'antd'

// 无状态函数式组价
const ColorList = ({ colors=[], onRemove=f=>f, rating = 0, onRate=f=>f }) =>
  <div className="color-list">
    {
      colors.length === 0 ? <p>没有ColorList列表数据</p> :
      colors.map((color, i) =>{
        // 此处 {title, color} = color 会有问题，我被坑了好久
        const { title, hue, rating, id} = color;
        console.log(colors);
        return <section className="color" key={color.id}>
            <h1>{title}</h1>
            <Button type="danger" ghost size="small" onClick={()=>onRemove(id)}>X</Button>
            <div className="color"
                 style={{ backgroundColor: hue }}>
            </div>
            {/* StarRating使用ES6类组件 */}
            {/* <StarRating starsSelected={rating} onRate={onRate}/> */}
            {/* 传参写成下边的格式 */}
            <StarRating starsSelected={rating} starColor={hue} onRate={(rating) => onRate(color.id, rating)}/>
        </section>
      })
    }
  </div>
// Colorlist已经给出onRemove的默认值是个函数，此处可以不写
/* ColorList.propTypes = {
  onRemove: PropTypes.func
} */
export default ColorList
