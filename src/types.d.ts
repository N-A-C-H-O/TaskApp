export interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
}

export type addTask = (newTask: Task) => void;

export type deleteTask = (taskId: string) => void;

export type changeStatus = (taskId: string) => void;
