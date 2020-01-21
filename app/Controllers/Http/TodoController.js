'use strict'

const Todo = use("App/Models/Todo");

class TodoController {
  async index({ view }) {
    const todos = (await Todo.all()).toJSON();
    return view.render('index', { todos });
  }
  async store({ request, response }) {
    const { name } = request.all();
    await Todo.create({name});
    return response.redirect('/');
  }
  async destroy({ response, params }) {
    const { id } = params;
    const todo = await Todo.find(id);
    await todo.delete();
    return response.redirect('/');
  }
}

module.exports = TodoController
