const importantTodoAction = x => {
    return{
        type: 'todoImportant',
        payload: x
    }
}

export default importantTodoAction;