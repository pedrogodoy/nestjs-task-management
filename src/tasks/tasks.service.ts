import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {

    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    //     const { status, search } = filterDto;

    //     let tasks = this.getAllTasks();

    //     if(status) {
    //         //filtra os itens que tiverem o mesmo status
    //         tasks = tasks.filter(task => task.status === status);
    //     }

    //     if(search)  {
    //         tasks = tasks.filter(task => 
    //             task.title.includes(search) ||
    //             task.description.includes(search),
    //         );
    //     }

    //     return tasks;
    // }

    // getTaskById(id: string): Task {
    //     const found = this.tasks.find(task => task.id === id);

    //     //Error handler for task not found
    //     if(!found) {
    //         throw new NotFoundException(`Task with Id ${id} not found`);
    //     }

    //     return found;
    // }

    // createTask(createTaskDto: CreateTaskDto): Task {
    //     //Extract title and description from DTO
    //     const { title, description } = createTaskDto;

    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN
    //     };

    //     this.tasks.push(task);
    //     return task;        
    // }

    // deleteTask(id: string) {
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter(task => task.id !== found.id);
    // }

    // updateTaskStatus(id: string, status: TaskStatus): Task {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
}
