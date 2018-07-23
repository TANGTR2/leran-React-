export const initTodo = (todosObject) => ({ 
    type: 'INIT_TODO', 
    todosObject
})

export const addTodo = (todosObject) => ({ 
    type: 'ADD_TODO',
    todosObject
})

export const toggleTodo = (todosObject) => ({ 
    type: 'TOGGLE_TODO', 
    todosObject
})

export const changeContent = (todosObject) => ({ 
    type: 'CHANGE_TODO', 
    todosObject 
})

export const filterTodo = (todosObject) => ({ 
    type: 'FILTER_TODO', 
    todosObject
})

