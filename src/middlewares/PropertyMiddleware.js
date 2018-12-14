const propertyMiddleware = store => next => action => {
    try {

        if(action.type === 'GET_PROPERTY') {
            action.property = {
                id: 1,
                key: 'TESTE',
                value: 'TESTE_VALUE'
            };
        }      
      

      return next(action)
    } catch (err) {
      console.error('Caught an exception!', err)      
      throw err
    }
  }

  export default propertyMiddleware;