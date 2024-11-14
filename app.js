const tasks = ['Задача 1'];

function addTask(arrName, nameTask) {
    arrName.push(nameTask);
}
addTask(tasks, 'Задача 2');
addTask(tasks, 'Задача 3');
addTask(tasks, 'Задача 4');
addTask(tasks, 'Задача 5');
console.log(tasks);


function deleteTask(arrName, nameTask){
    const index = arrName.indexOf(nameTask);
    if(index === -1) {
        return;
    }
    return arrName.splice(index, 1);
}
deleteTask(tasks, 'Задача 4');
console.log(tasks);


function replaceMember(arrName, nameTask){
    const result = deleteTask(arrName, nameTask);
    if(result) {
        tasks.unshift(result[0]);
    }
}
replaceMember(tasks, 'Задача 4');
console.log(tasks);



