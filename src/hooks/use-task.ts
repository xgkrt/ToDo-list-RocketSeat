import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTask(){
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

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

    function updateTask(id: string, payload: {title: Task["title"]}){
        setTasks(
            tasks.map((task) => task.id === id? {...task, state: TaskState.Created, ...payload} : task)
        )
    }

    function updateTaskStatus(id: string, concluded: boolean){
        setTasks(
            tasks.map((task) => task.id === id? {...task, concluded} : task)
        )
    }

    function deleteTask(id: string){
        setTasks(tasks.filter((tasks) => tasks.id != id));
    }

    return{
        updateTask,
        prepareTask,
        updateTaskStatus,
        deleteTask
    };
}