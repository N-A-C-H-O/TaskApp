export interface Task {
  name: string;
  isCompleted: boolean;
}

export type addTask = (newTask: Task) => void;
