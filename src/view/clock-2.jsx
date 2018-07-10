import React from 'react'
import { connect } from 'react-redux'
import { addTodo,text } from '../actions'

const AddTodo = ({ dispatch,todos,visibilityFilter,value }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
		dispatch(text(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
         Add
        </button>
		
      </form>
	  <p>{todos}</p>		
	  <p>{visibilityFilter}</p>
	  <p>{value}</p>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
  visibilityFilter:state.visibilityFilter,
  value:state.text
})

export default connect(mapStateToProps)(AddTodo)