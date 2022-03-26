import React, { useState } from  'react';
    
const App = () => {
    const [Text, setText] = useState("");
    const [toDoList,setTodoList] = useState([])
    
    const createtoDo = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // create a javascript object to hold all of the values
        setTodoList([...toDoList,{ 
          text: Text,
          checked: false
        }])
        setText('');
    };
    function completed(index){
      const obj = {
        ...toDoList[index]
      };
      obj.checked = !obj.checked;
      setTodoList([...toDoList.slice(0,index), obj].concat(toDoList.slice(index+1)));
  
    }

    function deleteToDo(i){
      setTodoList(toDoList.filter((_item, index) => index!== i));
    }
    
    return(
      <div>
        <form onSubmit={ createtoDo }>
            <div>
                <label>Todo: </label> 
                <input type="text" value={Text} onChange={ (e) => setText(e.target.value) } />
            </div>

            <input type="submit" value="Create Todo" />
        </form>

        
        {
            toDoList.map( (item, index) => 
            <div>
                <p key={ index }>{ item.text}</p>
                <input type='checkbox' checked={item.checked} onChange={() => completed(index)}/>
                {
                  item.checked?
                  <p>Completed</p>:
                  <p>Not Completed</p>
                }
                <button onClick={() => deleteToDo(index)}>Delete</button>
          </div>
            )
        }
      
      </div>
    );
};
    
export default App;