let nextTodoId = 0
export const addTodo = text => ({
  type: 'INCREMENT',
  text
})

export const setVisibilityFilter = filter => ({
  type: 'DECREMENT',
  filter
})

export const text = text => ({
  type: 'text',
  text: text
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}