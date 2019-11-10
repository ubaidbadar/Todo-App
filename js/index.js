var allData = JSON.parse(localStorage.getItem('allData'));
function showData() {
    if (allData == null) {
        allData = [];
    }
    var toolBoxes = document.getElementById('toolBoxes');
    toolBoxes.innerHTML = "";
    for (var i = 0; i < allData.length; i++) {
        var title = allData[i].title;
        var checkClass = " ";
        if (allData[i].completed) {
            title = `<del>${title}</del>`;
            checkClass = 'checked'
        }
        toolBoxes.innerHTML += `<div class="todoBox">
                                    <i class="material-icons check ${checkClass}" onclick="Completed(${i})">check</i>
                                    <b>${title}</b>
                                    <div class="actions">
                                        <a href="view.html" class="btn">View</a>
                                        <a href="edit.html#${i}" class="btn marginlR grey">Edit</a>
                                        <div class="btn red" onclick="Remove(${i})">Remove</div>
                                    </div>
                                </div>`
    }
}
showData();

function Completed(i) {
    allData[i].completed = !allData[i].completed;
    Modified();
}

function Remove(i){
    allData.splice(i, 0);
    Modified();
}

function Modified(){
    localStorage.setItem('allData', JSON.stringify(allData));
    showData()
}