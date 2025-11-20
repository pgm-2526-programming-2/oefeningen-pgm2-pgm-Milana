const todoList = [
  {
    task: "Complete Project",
    subtasks: [
      {
        task: "Write Code",
        subtasks: [
          { task: "Implement Feature A" },
          { task: "Test Feature A" },
          { task: "Refactor Code" },
        ],
      },
      {
        task: "Document Project",
        subtasks: [{ task: "Write Readme" }, { task: "Create Documentation" }],
      },
    ],
  },
  {
    task: "Prepare Presentation",
    subtasks: [{ task: "Create Slides" }, { task: "Practice Delivery" }],
  },
];

function showTasks(tasks) {
  for (let task of tasks) {
    console.log(task.task)
    if (task.subtasks) {
      showTasks(task.subtasks)
    }
  }
}

showTasks(todoList)