import { TodoRepository } from '../repositories/todoRepository'

export const TodoService = {
    async getAll() {
      return await TodoRepository.findAll();
    },

    async getById() {
      return await TodoRepository.findById();
    }
}