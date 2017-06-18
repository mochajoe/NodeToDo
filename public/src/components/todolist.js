import TodoEntries from './todoentries';

const TodoList = (props) => {

  if (props.todos.length>0) {
    return (
      <div>
        {props.todos.map( todo =>
            <TodoEntries todo = {todo} key = {todo._id} getData = {props.getData}/>
          )}
      </div>
      );

  } else {
    return (
      <div>
        empty
      </div>
    )
  }
};




export default TodoList;

