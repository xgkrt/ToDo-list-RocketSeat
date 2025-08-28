import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import React from "react";
import { delay } from "../helpers/utils";

export default function useTasks(){
    const [taskData] = useLocalStorage<Task[]>(TASKS_KEY, []);
    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

    async function fetchTasks(){
        if(isLoadingTasks){
            await delay(2000);
            setIsLoadingTasks(false);
        }

        setTasks(taskData);
    }

    React.useEffect(() => {
        fetchTasks();
    }, [taskData]);

    return{
        tasks,
        createdTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length,
        isLoadingTasks
    }
}