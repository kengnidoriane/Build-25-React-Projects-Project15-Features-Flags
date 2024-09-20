import { useState } from "react";
import data from "./data.js"
import './style.css';

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])

    // fonction qui s'execute lorsque la selection multiple est active

    function handleSingleSelection(getCurrentId) {
        // console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    // fonction qui s'execute lorsque la selection multiple est active

function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) {
        cpyMultiple.push(getCurrentId)
    }
    else {
        cpyMultiple.splice(findIndexOfCurrentId, 1)
    }
    setMultiple(cpyMultiple)
        console.log(getCurrentId);
    
}

console.log(selected, multiple);

    // initialement le boutoun est desactive

    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                data.map(dataItem => <div className="item"> 
                    <div onClick={ 
                        enableMultiSelection 
                        ? () => handleMultiSelection(dataItem.id)
                        :() => handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>

                        <span></span>
                    </div>
                    {enableMultiSelection
                        ? multiple.indexOf(dataItem.id) !== -1 && (
                        <div className="content">{dataItem.answer}</div>
                        )
                        : selected === dataItem.id && (
                        <div className="content">{dataItem.answer}</div>
                        )
                    }
                </div>) : <div>No data found</div>
            }
        </div>

    </div>
}