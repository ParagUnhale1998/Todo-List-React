import React, { useState ,useEffect } from 'react'
import TodoItems from './components/TodoItems';

export default function App() {
  const[inputText,setInputText] = useState("")
  const[items,setItems] = useState([])
  
  useEffect(() => {
    // Load items from local storage on component mount
    const storedItems = localStorage.getItem('todoItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  function handleInput(event){
    const newValue = event.target.value;
    setInputText(newValue);
   
  }
  
  function addItems(e){
    e.preventDefault()
    if(inputText === ""){
      return
    }
    else{
   setItems((prevValue)=>{
      const newItems = [...prevValue,inputText]
      localStorage.setItem('todoItems', JSON.stringify(newItems));
      return newItems;
    })
    setInputText("")
    }
 
  }
   
  function deleteItem(id){
    setItems((prevItems)=>{
      const newItems = prevItems.filter((item,index)=> {
              return index !== id
      });
      localStorage.setItem('todoItems', JSON.stringify(newItems));
      return newItems;
    })
  }
  return (
    <div className='container'>
      <div className="heading">
      <h1>Todo-List</h1>
      </div>
      <form className="form" onSubmit={addItems}>
        <input onChange={handleInput} type="text" placeholder='Enter Task' value={inputText} />
        <button type='submit' >Add Task</button>
      </form>
       <div className="items">
        <ul>
       {items.map((todoItem,index)=>{
         return <TodoItems  key={index} id={index} inputText={todoItem} onChecked={deleteItem}/>
       })}
        </ul>
       </div>
    </div>
    
  )
}
