const deleteTodoAction = (x) => {
    return {
        type: 'deleteTodo',
        payload: x
    }
}

export default deleteTodoAction;