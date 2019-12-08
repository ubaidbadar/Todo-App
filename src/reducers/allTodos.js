let allTodo = JSON.parse(localStorage.getItem('allTodo'));
if (allTodo == null) {
    allTodo = []
}

const allTodos = (state = allTodo, action) => {
    if (action.type === 'addTodo') {
        state.push(action.payload);
        localStorage.setItem('allTodo', JSON.stringify(state));
    }
    else if (action.type === 'editTodo') {
        state[action.payload.index] = action.payload.todo;
        localStorage.setItem('allTodo', JSON.stringify(state));
    }
    else if (action.type === 'todoCompleted') {
        const todo = state.find(td => td.id === action.payload);
        todo.completed = !todo.completed;
        localStorage.setItem('allTodo', JSON.stringify(state));
    }
    else if (action.type === 'todoImportant') {
        const todo = state.find(td => td.id === action.payload);
        todo.important = !todo.important;
        localStorage.setItem('allTodo', JSON.stringify(state));
    }
    else if (action.type === 'deleteTodo') {
        state.splice(action.payload, 1);
        localStorage.setItem('allTodo', JSON.stringify(state));
    }
    return state;
}

export default allTodos;