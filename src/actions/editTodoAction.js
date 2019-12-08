const editTodoAction = (x) => {
    return {
        type: 'editTodo',
        payload: x
    }
}

export default editTodoAction;