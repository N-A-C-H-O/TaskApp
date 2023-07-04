export interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
}

export interface TaskList {
  id: string;
  name: string;
  tasks: Task[];
  totalTasks: number;
}

export type AddTask = (newTask: Task) => void;

export type DeleteTask = (taskId: string) => void;

export type ChangeStatus = (taskId: string) => void;

export type ChangeBackground = (newBackground: string) => void;

export type CreateList = () => void;
