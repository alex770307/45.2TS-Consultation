
import { useState } from "react";
import styles from "./TodoApp.module.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}
//Определяем интерфейс Task, который описывает объект задачи:
// id: number — уникальный идентификатор задачи.
// text: string — текст задачи.
// completed: boolean — статус выполнения.

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  //tasks (массив Task[]) — список задач.
// newTask (строка) — содержит текст новой задачи.
// setTasks и setNewTask — функции для обновления состояний

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task: Task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };
  //Проверяем, если newTask пустая (пустая строка после trim()), выходим (return).
// Создаем новую задачу:
// id: Date.now() — используем текущее время в миллисекундах как ID.
// text: newTask — берем текст из newTask.
// completed: false — по умолчанию задача не выполнена.
// Добавляем новую задачу в tasks с помощью setTasks([...tasks, task]).
// Очищаем поле ввода setNewTask("").

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };
  //Перебираем tasks с map(), если task.id совпадает с id, меняем completed (true -> false и наоборот).
// Остальные задачи остаются без изменений.

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  //Функция deleteTask работает следующим образом:

// Принимает id задачи, которую нужно удалить.
// Вызывает setTasks, обновляя состояние списка задач.
// Использует filter(), чтобы создать новый массив,
//  исключая задачу с переданным id:
// tasks.filter(task => task.id !== id) — оставляет только те задачи,
//  у которых id не равен переданному id.
// В результате создаётся новый массив без удалённой задачи.
// Обновляет состояние (setTasks), заменяя старый массив новым,
//  в котором нет удалённой задачи.

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To-Do List</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask} className={styles.addButton}>
          Add
        </button>
        {/* Поле ввода (input):
    value={newTask} — связываем поле ввода с состоянием newTask.
    onChange={(e) => setNewTask(e.target.value)} — обновляем newTask, когда пользователь вводит текст.
    Кнопка Add:
    onClick={addTask} — при клике вызываем addTask(). */}
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={styles.taskItem}>
            {/* map(task => ...) — перебираем tasks, создавая список <li>. */}
            <span
              className={`${styles.taskText} ${task.completed ? styles.completed : ""}`}
              onClick={() => toggleTask(task.id)}
//               Если task.completed === true, добавляем styles.completed, иначе — пустую строку.
// onClick={() => toggleTask(task.id)} — при клике меняем статус задачи.
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className={styles.deleteButton}>X</button>
            {/* onClick={() => deleteTask(task.id)} — при клике удаляем задачу.
className={styles.deleteButton} — применяем стили. */}
          </li>
        ))}
      </ul>
    </div>
  );
}


