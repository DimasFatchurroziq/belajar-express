let todos = []

export const getAllTodos = ((req, res) => {
    res.status(200).json(todos);
});

export const getTodo = ((req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === id);
    if(!todo){
        res.status(404).json({ message: "Todo not found" });
    };
    res.status(200).json(todo);
});

export const createTodo = ((req, res) => {
    const { title, fill } = req.body;
    const newTodo = {id: Date.now(), title, fill};
    todos.push(newTodo);
    res.status(201).json(newTodo, { message: 'Todo created' });
});

export const updateTodo = ((req, res) => {
    const id = parseInt(req.params.id);
    const { title, fill } = req.body;
    const todo = todos.find(todo => todo.id === id);
    if(!todo){
        return res.status(404).json({ message: 'Todo not found' });
    }; 
    todo.title = title;
    todo.fill = fill;
    res.status(200).json(todo, { message: 'Todo updated'});
});

export const deleteTodo = ((req, res) => {
    const id = parseInt(req.params.id);
    const { title, fill } = req.body;
    const todo = todos.find(todo => todo.id === id);
    if(!todo){
        return res.status(404).json({ message: 'Todo not found' });
    };
    const index = todos.findIndex(todo => todo.id === id);
    todos.splice(index, 1);
    res.status(200).json({ message: 'Todo deleted' });
});