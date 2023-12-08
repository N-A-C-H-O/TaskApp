import { create } from 'zustand';
import { Task, TaskList } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface TasksListState {
  items: TaskList[];
  selected: TaskList;
  createOne: (taskList: TaskList) => void;
  deleteOne: (id: string) => void;
  changeName: (newName: string) => void;
  changeIcon: (newIcon: string) => void;
  selectOne: (id: string) => void;
  addTask: (newTask: Task) => void;
  deleteTask: (taskId: string) => void;
  changeTaskStatus: (taskId: string) => void;
}

const HomeTaskList: TaskList = {
  id: uuidv4(),
  name: 'Home',
  totalTasks: 0,
  tasks: [],
  icon: '🏠'
};

export const useTasksListStore = create<TasksListState>((set, get) => ({
  items: [HomeTaskList],
  selected: HomeTaskList,
  createOne: taskList =>
    set(state => ({
      items: [...state.items, taskList]
    })),
  deleteOne: id => {
    const { items, selectOne } = get();
    const filter = items.filter(item => item.id !== id);

    selectOne(HomeTaskList.id);

    set(() => ({
      items: filter
    }));
  },
  changeName: newName => {
    const { items, selected } = get();
    const taskList = items.find(item => item.id === selected.id);

    if (taskList === undefined) return;

    taskList.name = newName;

    set(() => ({
      selected: taskList
    }));
  },
  changeIcon: newIcon => {
    const { items, selected } = get();
    const taskList = items.find(item => item.id === selected.id);

    if (taskList === undefined) return;

    taskList.icon = newIcon;

    set(() => ({
      selected: taskList
    }));
  },
  selectOne: id => {
    const { items } = get();
    const newSelected = items.find(item => item.id === id);
    set(() => ({
      selected: newSelected
    }));
  },
  addTask: newTask => {
    const { items, selected } = get();

    const taskList = items.find(item => item.id === selected.id);

    if (taskList === undefined) return;

    taskList.tasks = [...taskList.tasks, newTask];
    taskList.totalTasks += 1;

    set(() => ({
      selected: taskList
    }));
  },
  deleteTask: taskId => {
    const { items, selected } = get();

    const taskList = items.find(item => item.id === selected.id);

    if (taskList === undefined) return;

    const filter = taskList.tasks.filter(item => item.id !== taskId);
    taskList.tasks = filter;
    taskList.totalTasks -= 1;

    set(() => ({
      selected: taskList
    }));
  },
  changeTaskStatus: taskId => {
    const { items, selected } = get();

    const taskList = items.find(item => item.id === selected.id);

    if (taskList === undefined) return;

    taskList.tasks = taskList.tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        };
      }
      return task;
    });

    set(() => ({
      selected: taskList
    }));
  }
}));
