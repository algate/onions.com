import React, { Component } from 'react'

export default class StarRating extends Component {
  constructor(props){
    super(props);
    this.state = {
      totalStars: 5
    }
    // this.onClick = this.onClick.bind(this)
    this.onRate = this.onRate.bind(this)
  }
  // 外边的onRate是组件的onRate, 方法里边的onRate是props的onRate
  onRate(i) {
    this.props.onRate(i+1)
  }
  /* onClick(i) {
    console.log(i);
    this.props.onRate(i);
  } */
  render() {
    // const { onRate } = this
    const { starsSelected,starColor } = this.props
    const { totalStars } = this.state
    return <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>
          <div key={i} className={(i<starsSelected) ? "star selected" : "star"}
                onClick={()=> this.onRate(i)} style={(i<starsSelected) ? {backgroundColor: starColor} : void(0)}>
          </div>
        )}
        <p>{starsSelected} of {totalStars} stars</p>
    </div>
  }
}
