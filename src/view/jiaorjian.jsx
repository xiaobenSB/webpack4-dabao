import React from 'react'
import { connect } from 'react-redux'
import { addTodo ,setVisibilityFilter } from '../actions'
const Add = ({ dispatch}) => {
	return (
		<div id="redux">
			{' '}
			<button onClick={e=>{dispatch(addTodo())}}>
			  +
			</button>
			{' '}
			<button onClick={e=>{dispatch(setVisibilityFilter())}}>
			  -
			</button>
			{' '}
		</div>
		)
}
		
export default connect()(Add)