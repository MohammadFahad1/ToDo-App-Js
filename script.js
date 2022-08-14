const todo = document.getElementById('add-todo').addEventListener('click', function () {
    let inputVal = document.getElementById('todo').value;
    if (inputVal.trim() == "") {
        alert("Please Enter something & try again");
    } else {
        const ol = document.querySelector('ol');
        const li = document.createElement('li');
        li.innerText = inputVal;
        ol.appendChild(li);
        document.getElementById('todo').value = '';
    }
});