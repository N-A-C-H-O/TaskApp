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
