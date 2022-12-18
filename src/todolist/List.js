import React, {useState} from "react";
function List(props){
  let [inputText, setInputText]=useState("");
  let [critical, setCritical]=useState(false);
  let [target, setTarget]=useState({index:-1,text:null});


  let updateTarget=function(index, text){
    setTarget({index:index, text:text});
  };

  let cancelChange=function(){
    setTarget({index:-1, text:null});
  }
  return <>
    <ul>
      {props.data.map((item,index)=>{
        if(target.index===index){
          return <li
          key={index}
          >
            <input type="text" value={target.text} onChange={(e)=>{updateTarget(index, e.target.value);}}/>
            <input type="checkbox" checked={critical} />
            <button onClick={()=>{props.updateItem(target);
                                  setTarget({index:-1, text:null});
                                    }}>Comfirm</button>
            <button onClick={()=>{cancelChange();}}>cancel</button>
          </li>
        }else{ 
          return <li 
          style={{fontWeight:(item.critical?"bold":"normal")}}
          key={index}
          >
            <span onClick={()=>{updateTarget(index, item.text);}}>{item.text}</span>
            <button onClick={()=>{props.deleteItem(index)}}>Delete</button>
          </li>;
          }
      })}
    </ul>
  </>
}
export default List;