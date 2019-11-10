var allData = JSON.parse(localStorage.getItem('allData'));
const loc = +window.location.href.split('#')[1];
const data = allData[loc];
document.getElementById('title').value = data.title;
document.getElementById('loc').value = data.loc;
document.getElementById('desc').value = data.desc;

function EditTodo() {
    var inputs = document.getElementsByTagName('input');
    for (var input of inputs) {
        if (input.value === "") {
            input.style.borderColor = "red";
            return false;
        } else {
            input.style.borderColor = "white";
        }
    }
    // Updating Data
    data.title = inputs[0].value;
    data.loc = inputs[1].value;
    data.desc = inputs[2].value;

    allData[loc] = data;
    localStorage.setItem('allData', JSON.stringify(allData));
    document.getElementById('alert').style.top = 0;
    setTimeout(() => {
        document.getElementById('alert').style.top = '-48px';
    }, 2000)
}