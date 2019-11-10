var inputs = document.getElementsByTagName('input');
let inCheck = true;
function create() {
    check = true;
    for (var input of inputs) {
        if (input.value === "") {
            input.className = "danger";
            inCheck = false;
        } else {
            input.className = "filled";
        }
    }
    if (!inCheck) {
        return false;
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
for (let input of inputs) {
    input.onblur = function () {
        if (this.value !== '') {
            this.className = 'filled';
        }
        else {
            this.className = 'danger'
        }
    }
}