 const addProperty = property => ({
    type: 'ADD_PROPERTY',
    property
})

 const alterProperty = property => ({
    type: 'ALTER_PROPERTY',
    property
})

 const getProperty = id => ({
    type: 'GET_PROPERTY',
    id
})
  
 const removeProperty = id => ({
    type: 'REMOVE_PROPERTY',
    id
})

export default{
    addProperty,
    alterProperty,
    getProperty,
    removeProperty
}
  