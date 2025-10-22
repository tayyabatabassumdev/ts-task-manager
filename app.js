"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tasks = [];
function addTask(newTask) {
    if (tasks.some((task) => task.id === newTask.id)) {
        console.error("Error: Task with this ID already exists.");
        return;
    }
    tasks.push(newTask);
    console.log(`Task '${newTask.title}' added.`);
}
function toggleTaskCompletion(id) {
    const task = tasks.find((t) => t.id === id);
    if (task) {
        task.isComplete = !task.isComplete;
        console.log(`Task ID ${id} is now ${task.isComplete ? "Complete" : "Incomplete"}.`);
        return true;
    }
    console.error(`Error: Task ID ${id} not found.`);
    return false;
}
function displayTasks(taskList) {
    console.log("\n--- Current Tasks ---");
    if (taskList.length === 0) {
        console.log("No tasks found.");
        return;
    }
    taskList.forEach((task) => {
        const status = task.isComplete ? "[DONE]" : "[TODO]";
        console.log(`${status} [${task.priority}] ${task.id}: ${task.title}`);
    });
    console.log("---------------------\n");
}
addTask({
    id: 1,
    title: "Project Outline",
    priority: "High",
    isComplete: false,
});
addTask({
    id: 2,
    title: "Write documentation",
    description: "Explain setup and usage.",
    priority: "Medium",
    isComplete: false,
});
displayTasks(tasks);
toggleTaskCompletion(1);
displayTasks(tasks);
//# sourceMappingURL=app.js.map