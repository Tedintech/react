import React, {useState} from "react";
function Form(props){
  let [inputText, setInputText]=useState("");
  let [critical, setCritical]=useState(false);
  return <>
    <input type="text" value={inputText} onChange={(e)=>{
    setInputText(e.target.value)
    }} />
    <input type="checkbox" checked={critical} onChange={()=>{
      setCritical(!critical);
    }} />
    <button onClick={()=>{
      props.addItem(inputText, critical);
      setInputText("");
    }}>Add</button>
  </>
}
export default Form;