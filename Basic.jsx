import React, { useState } from 'react';
import Todolist  from './Todolist';


const Basic  =()=>{

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent=(event)=>{
        setInputList(event.target.value);

    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return[...oldItems, inputList];
        });
        setInputList("");

    };
    return(
        <>
        <div className="main_div">
            <div className="center_div">
              <br />
              <h1> ToDo List </h1>
              <br />
              <input type="text" placeholder="Add a Items"
              value={inputList} onChange={itemEvent} />
              <button onClick={listOfItems}> + </button>

              <ol>
                  {
                      Items.map((itemval)=>{
                        return  <Todolist text={itemval} />
                      })
                  } 
              </ol>
            </div>

        </div>
        </>
    );
};

export default Basic;