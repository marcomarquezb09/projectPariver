import { Injectable } from '@angular/core';
import { Tasks } from '../models/tasks';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  tasks: Task[] = [
    tasksCompleted: Tasks[] = []
  ]

  constructor(private storage: Storage) {
    this.initStorage()
  }

  private async initStorage() {
    await this.storage.create()
    this.loadTasks
  }

  private async loadTasks() {
    const storedTasks = await this.storage.get('tasks')
    const storedTasksCompleted = await this.storage.get('tasksCompleted')
    this.tasks = storedTasks || []
    this.taskCompleted = storedTasksCompleted || []

  }

  async getAllTasks(): Promise<Tasks[]> {
    return this.Tasks
  }

  async getCompletedTasks(): Promise<Tasks[]> {
    return this.tasksCompleted
  }

  async addTask(newTask: Tasks): Promise<void> {
    this.tasks.push(newTask)
    await this.storage.set('tasks', this.tasks)
    this.tasks.forEach(el)=> {
      console.log(JSON.stringify(el))
    }
  }

  async deleteTask(id: number): Promise<void> {
    this.tasks = this.tasks.filter(task => task.id !== id)
    await this.storage.set('tasks', this.tasks)
  }

  async completedTask(id: number): Promise<void> {
    const task = this.tasks.find(task => task.id === id)
    if (task) {
      task.completed = !task.completed
      this.updateTasksCompleted(task)
      await this.storage.set('tasks', this.tasks)
      await this.storage.set('tasksCompleted', this.tasksCompleted)
      this.tasksCompleted.forEach(el)=> {
        console.log(JSON.stringify(el))
      }

      private updateTasksCompleted(task:Tasks){
        if(task.completed){
          if(!this.updateTasksCompleted.find(t=> t.id === task.id !== task.id)){
            this.updateTasksCompleted.push(task)
          }
      }else{
        this.tasksCompleted = this.updateTasksCompleted.filter(t =>.id !==task.id)
        
      } 

      addTasksCompleted(taskCompleted: Tasks){
        if(this.updateTasksCompleted.completed && !this.updateTasksCompleted.find(t => t.id === this.updateTasksCompleted.id)){
          this.updateTasksCompleted.push(taskCompleted)
          await this.storage.set('tasksCompleted', this.tasksCompleted)
        }
      }

    }

  



