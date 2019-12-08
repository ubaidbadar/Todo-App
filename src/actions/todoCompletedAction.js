const todoCompletedAction = x => {
    return {
        type: 'todoCompleted',
        payload: x
    }
}

export default todoCompletedAction;