# Type-Safe Task Manager 

A simple task management application built entirely with **TypeScript**. This project serves as a hands-on demonstration of core TypeScript concepts.

---

##  Project Goal

The primary objective is to showcase how **TypeScript Interfaces** and **Function Typing** enforce a rigid data structure and clear input/output contracts. By using TS, we ensure all task operations are type-safe, catching potential errors during development rather than at runtime.

---

##  Key TypeScript Concepts Demonstrated

The code within `taskManager.ts` illustrates these fundamental principles:

| Concept | Description | Implementation |
| :--- | :--- | :--- |
| **Interface** | Defines the mandatory structure (`id`, `title`, etc.) for all `Task` objects. | `interface Task` |
| **Type Alias** | Provides a readable nickname for a complex type (an array of tasks). | `type TaskList = Task[];` |
| **Union Type** | Restricts the `priority` field to only three possible string values. | `'High' \| 'Medium' \| 'Low'` |
| **Optional Properties** | Marks a property (`description`) as optional using the `?`. | `description?: string;` |
| **Function Typing** | Explicitly defines input arguments and ensures functions return `void` or `boolean`. | `function addTask(newTask: Task): void` |

---



### Prerequisites

You must have **Node.js** and **npm** installed on your system.

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone [Your Repository URL Here]
    cd ts-task-manager
    ```

2.  **Install Dependencies:**
    This installs **TypeScript** and **ts-node**, allowing you to execute TypeScript files directly.
    ```bash
    npm install
    ```

3.  **Run the Application:**
    Execute the main file using `ts-node`. The output, which includes task creation and status changes, will be printed to the console.
    ```bash
    npx ts-node taskManager.ts
    ```

---

## 📁 Project Structure
