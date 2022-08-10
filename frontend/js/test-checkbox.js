

function checkBoxLimit() {
    let checkBoxGroup = document.getElementById('checkbox').getElementsByTagName("input");
    let limit = 1;
    for(var i = 0; i < checkBoxGroup.length; i++) {
        checkBoxGroup[i].onclick = function() {
            let checkedCount = 0;
        for(var i = 0; i < checkBoxGroup.length; i++){
            checkedCount += (checkBoxGroup[i].checked) ? 1 : 0;
        }
        if(checkedCount > limit){
            console.log("You can select only one checkbox.");
            alert("Please only check one box.");
            this.checked = false;
        }
        }
    }
}
