import { create } from "zustand";
import { Task, TaskList } from "../types";
import { v4 as uuidv4 } from "uuid";

interface TasksListState {
    items: TaskList[];
    selected: TaskList;
    createOne: (taskList: TaskList) => void;
    deleteOne: (id: string) => void;
    selectOne: (id: string) => void;
    addTask: (newTask: Task) => void;
    deleteTask: (taskId: string) => void;
}

export const useTasksListStore = create<TasksListState>((set, get) => ({
    items: [],
    selected: {
        id: uuidv4(),
        name: "Home",
        totalTasks: 0,
        tasks: []
    },
    createOne: (taskList) => set((state) => ({
        items: [...state.items, taskList]
    })),
    deleteOne: (id) => {
        const { items } = get();
        const filter = items.filter((item) => item.id !== id);
        set(() => ({
            items: filter
        }));
    },
    selectOne: (id) => {
        const { items } = get();
        const selected = items.find((item) => item.id === id);
        set(() => ({
            selected
        }));
    },
    addTask: (newTask) => {
        const { selected } = get();
        set((state) => ({
            selected: {
                ...selected,
                tasks: [...state.selected.tasks, newTask],
                totalTasks: state.selected.totalTasks++
            }
        }));
    },
    deleteTask: (taskId) => {
        const { selected } = get();
        const filter = selected.tasks.filter((item) => item.id !== taskId);
        set((state) => ({
            selected: {
                ...selected,
                tasks: filter,
                totalTasks: state.selected.totalTasks--
            }
        }));
    }
}));