import React, {useState, useEffect} from "react";
import Form from "./Form.js";
import List from "./List.js";
function TodoList(){
  
  let [data, setData]=useState([]);
  
  let addItem = function(inputText,critical){
    let newData=[...data];
    newData.push({text:inputText, critical:critical});
    setData(newData);
  };
  let updateItem = function(target){
    let newData=[...data];
    newData[target.index].text=target.text;
    setData(newData);
  }
  let deleteItem = function(index){
    let newData = [...data];
    newData.splice(index,1);
    setData(newData);
  }
  
  useEffect(()=>{
    let newData = window.localStorage.getItem("data");
    if(newData===null){
      newData="[]"; 
    }
    setData(JSON.parse(newData));
  }, [])
  
  useEffect(()=>{
    window.localStorage.setItem("data", JSON.stringify(data));
  });

  return <>
      <Form addItem={addItem} />
      <List data={data}
            deleteItem={deleteItem}
            updateItem={updateItem}
            />
  </>;
}
export default TodoList;