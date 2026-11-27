#Current to-do-lists
todos = []
todos.append("Buy shampoo")
todos.append("Buy soap")
todos.append("Buy toothpaste")
todos.append("Buy toothbrush")
print("To-Do List:")
for index, task in enumerate(todos, 1):
    print(f"{index}. {task}")

#Add new task from user
todos.append(input("Add task: "))
for index, task in enumerate(todos, 1):
    print(f"{index}. {task}")

print("Completed task")
print("Pending task")



