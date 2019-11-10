function createTodo(data) {
    // Get Data From LocalStorage
    var allData = JSON.parse(localStorage.getItem('allData'));
    if (allData == null) {
        allData = [];
    }
    allData.push(data);

    // localStorage.setItem('var_name', JSON.stringify("data"));
    localStorage.setItem('allData', JSON.stringify(allData));
}