const todos = (state = {}, action) => {
    switch (action.type) {
      case 'GET_PROPERTY':
        return {
          ...state,
          property: action.property
        }
      
      default:
        return state
    }
  }
  
  export default todos