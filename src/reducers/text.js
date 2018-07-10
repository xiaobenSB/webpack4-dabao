export default (state = 0, action) => {
  switch (action.type) {
    case 'text':
      return action.text
    default:
      return state
  }
}