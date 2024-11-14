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
    arrName.splice(index, 1);
}
deleteTask(tasks, 'Задача 3');
console.log(tasks);

function replaceMember(arName, nameTask){
    const index = tasks.indexOf(nameTask);
    if(index === -1) {
        return;
    }
    const res = tasks.splice(index, 1);
    tasks.unshift(res.join());
}
replaceMember(tasks, 'Задача 5');
console.log(tasks);



