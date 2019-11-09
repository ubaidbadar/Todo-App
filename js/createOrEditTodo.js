function createOrEditTodo(status = "edit") {
    var inputs = document.getElementsByTagName('input');
    for (var input of inputs) {
        if (input.value === "") {
            input.style.borderColor = "red";
            return false;
        } else {
            input.style.borderColor = "white";
        }
    }
    var date = new Date();
    var data = {
        title: inputs[0].value,
        loc: inputs[1].value,
        desc: inputs[2].value,
        date: date.getDate() + '/' + (date.getMonth() + +1) + '/' + date.getFullYear()
    }
    if (status === "create") {
        createTodo(data)
    } else{

    }
    for (var input of inputs) {
        input.value = '';
    }
    document.getElementById('alert').style.top = 0;
    setTimeout(()=>{
        document.getElementById('alert').style.top = '-48px';
    }, 2000)
}

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