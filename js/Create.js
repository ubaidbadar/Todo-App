function create() {
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
        date: date.getDate() + '/' + (date.getMonth() + +1) + '/' + date.getFullYear(),
        completed: false
    }
    for (var input of inputs) {
        input.value = '';
    }
    var allData = JSON.parse(localStorage.getItem('allData'));
    if (allData == null) {
        allData = [];
    }
    allData.push(data);
    localStorage.setItem('allData', JSON.stringify(allData));
    document.getElementById('alert').style.top = 0;
    setTimeout(() => {
        document.getElementById('alert').style.top = '-48px';
    }, 2000)
}