var inputs = document.getElementsByTagName('input');
let inCheck = true;
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