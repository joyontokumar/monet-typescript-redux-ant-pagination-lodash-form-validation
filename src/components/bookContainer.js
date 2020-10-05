import React from 'react'
import { connect } from 'react-redux'
import { buyBook } from '../redux/book/bookActions'

function bookContainer(props) {
  return (
    <div>
      <h3>Number of Books - {props.numberOfBooks}</h3>
      <button onClick={props.buyBook}>Buy Book</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numberOfBooks: state.numberOfBooks,
  }
}

const mapDispatchtoProps = (dispatch) => {
  // return {
  //     buyBook: function () {
  //         dispatch(buyBook());
  //     }
  // }
  return {
    buyBook: () => dispatch(buyBook()),
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(bookContainer)
