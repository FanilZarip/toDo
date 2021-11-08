// Сегодня напишем самый простой TODO лист без графического интерфейса.
// Хранилищем будет объект, а имена задач - ключами.
// const list = {
//  "create a task": "In Progress",
//  "make a bed": "Done",
//  "write a post": "To Do",
// }

// Функция changeStatus - будет менять статус задачи
// changeStatus("write a post", "Done")

// Функция addTask - добавляет новую задачу
// addTask('have a walk')

// Функция deleteTask - удаляет задачу
// deleteTask('have a walk')

// Функция showList будет выводить весь список дел в виде
//. Todo:
//  "create a task",
//  "make a bed",
// In Progress:
//  "write a post"
// Done:
//  -

// Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль

const toDoList = {};

function addTask(task) {
	toDoList[task] = 'To Do';
}

function changeStatus(task, status) {
	toDoList[task] = status;
}

function deleteTask(task) {
	delete toDoList[task];
}

function showList() {
	let toDoTasks = '';
	let inProgresTasks = '';
	let DoneTasks = '';
	let fullList;

	for (const key in toDoList) {
		if (toDoList[key] === 'To Do') {
			toDoTasks = toDoTasks + key + ', \n';
		} else if (toDoList[key] == 'in progres') {
			inProgresTasks = inProgresTasks + key + ', \n';
		} else if (toDoList[key] == 'Done') {
			DoneTasks = DoneTasks + key + ', \n';
		} else {
			console.log(`Task: \'${key}\' have wrong status, please check it`);
		}
	}

	if (DoneTasks === '') {
		DoneTasks = '-';
	}
	if (toDoTasks === '') {
		toDoTasks = '-';
	}
	if (inProgresTasks === '') {
		inProgresTasks = '-';
	}

	const toDo = 'ToDo: \n' + toDoTasks + '\n';
	const inProgres = 'InProgres: \n' + inProgresTasks + '\n';
	const done = 'Done:\n' + DoneTasks;

	fullList = toDo + inProgres + done;
	return console.log(fullList);
}

addTask('learn obj');
addTask('make To Do list proj');
changeStatus('learn obj', 'in progres');
addTask('to buy an icecream');
addTask('to draw a tatar symbols');
addTask('learn for');
deleteTask('to draw a tatar symbols');
changeStatus('to read the book', 'Done');
changeStatus('learn for', 'in progress');
console.log('toDoList: \n', toDoList);

showList();
// Потратил чуть больще 3х часов, для такой простой задачи много?
