import { useState } from 'react';
import './App.css';
function App() {  
  const keypress = document.getElementById("clear");
  keypress.addEventListener("keypress" , function(event){
    console.log(event.key)
  })
    

      const [item , setItem] =  useState(); 
      let listItem = document.getElementById("list-item");
      const AddItem = ()=>{
        
        document.getElementById('clear').value = "";
        if(item !== ""){
          let makeli= document.createElement('li');
          makeli.appendChild(document.createTextNode(item))
          listItem.appendChild(makeli)
          makeli.onclick = function(){
              this.parentNode.removeChild(this);
          }
                } 
       else {
             alert("please enter a value to item")
          };
        
      }
     
      const handelinputchange = (event)=>{
        setItem(event.target.value)      
      }
      return (
    <div className="App">
      <input type='text' id='clear' onChange={handelinputchange}></input>
      <button onClick={AddItem}>add</button>
      <ul id='list-item'></ul>
    </div>
  );
}

export default App;
