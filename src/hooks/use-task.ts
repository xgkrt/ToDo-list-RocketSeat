import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import React from "react";

export default function useTask(){
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
    const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);
    const [isDeletingTask, setIsDeletingTask] = React.useState(false);

    function prepareTask(){
        setTasks([
            ...tasks, 
        {
            id: Math.random().toString(36).substring(2,9), 
            title: "", 
            state: TaskState.Creating
        },
        ]);
    }

    async function updateTask(id: string, payload: {title: Task["title"]}){
        setIsUpdatingTask(true);
        await delay(1000);

        setTasks(
            tasks.map((task) => task.id === id? {...task, state: TaskState.Created, ...payload} : task)
        )

        setIsUpdatingTask(false);
    }

    function updateTaskStatus(id: string, concluded: boolean){
        setTasks(
            tasks.map((task) => task.id === id? {...task, concluded} : task)
        )
    }

    async function deleteTask(id: string){
        setIsDeletingTask(true);
        setTasks(tasks.filter((tasks) => tasks.id != id));
        setIsDeletingTask(false);
    }

    return{
        updateTask,
        prepareTask,
        updateTaskStatus,
        deleteTask,
        isUpdatingTask,
        isDeletingTask
    };
}