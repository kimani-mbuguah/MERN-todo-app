import React, { Component } from 'react';
import TodoItem from './todoItem';
class Todos extends Component {
    state = {  }
    render() { 
        return this.props.todos.map((todo)=>(
            <TodoItem />
        ));
    }
}
 
export default Todos;