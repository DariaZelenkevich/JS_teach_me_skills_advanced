'use strict'
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const userList = getfibonacciRow(0, 1, data);
        return userList;
    })
    .then(function(userList) {
        createUserTable(userList);
    })
    .catch(function(error) {
        console.log(error);
    }
)

function getfibonacciRow(a, b, data) {
    const fibonacciRow = [];
    let i = 0;
    while( i < data.length) {
        let c = a + b;
        if(data[i].id === c){
            fibonacciRow.push(data[i]);
            a = b; b = c;

        }
        i++;
    }
    return fibonacciRow;
}

function createUserTable(userArr) {

    const table = document.createElement('TABLE');
    const thead = document.createElement('THEAD');

    const theadRow = thead.insertRow();

    const th1 = document.createElement('TD');
    th1.appendChild(document.createTextNode("userId"));
    theadRow.appendChild(th1);

    const th2 = document.createElement('TD');
    th2.appendChild(document.createTextNode("Id"));
    theadRow.appendChild(th2);

    const th3 = document.createElement('TD');
    th3.appendChild(document.createTextNode("title"));
    theadRow.appendChild(th3);

    const th4 = document.createElement('TD');
    th4.appendChild(document.createTextNode("completed"));
    theadRow.appendChild(th4);

    table.appendChild(thead);

    let thArr = thead.querySelectorAll('TD');
    for (let i = 0; i < thArr.length; i++) {

        thArr[i].style.border = "2px solid black";
        thArr[i].style.padding = "10px";
    }

    const tbody = document.createElement('TBODY');

    for (let i = 0; i < userArr.length; i++) {

        let tr = tbody.insertRow();
        tbody.appendChild(tr);

        let td1 = document.createElement('TD');
        td1.appendChild(document.createTextNode(userArr[i].userId));
        tr.appendChild(td1);

        let td2 = document.createElement('TD');
        td2.appendChild(document.createTextNode(userArr[i].id));
        tr.appendChild(td2);

        let td3 = document.createElement('TD');
        td3.appendChild(document.createTextNode(userArr[i].title));
        tr.appendChild(td3);

        let td4 = document.createElement('TD');
        td4.appendChild(document.createTextNode(userArr[i].completed));
        tr.appendChild(td4);

    }

    table.appendChild(tbody);

    let tdArr = tbody.querySelectorAll('TD');
    for (let i = 0; i < tdArr.length; i++) {

        tdArr[i].style.border = "1px solid black";
        tdArr[i].style.padding = "10px"; 
   
    }
    document.body.appendChild(table);
}