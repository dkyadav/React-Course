import { useState } from "react";

import '../../src/style.css'

//import "./style.css";

export default function FCMain() {
    let [counter, setCounter] = useState(0);
    const [colorme, setColorme] = useState({
        color: "cyan"
    });

    const [todo, setTodo] = useState([{
        priority: 1,
        detail: "First initial dummy todo list"
    }, {
        priority: 2,
        detail: "Second dummy list"
    }]);
    const [priority, setPriority] = useState('');
    const [detail, setDetail] = useState('');

    //const [todo, setTodo] = useState(['1', '3']);

    const [products, setProducts] = useState(['a', 'b', 'c']);

    const [colorsize, setcolorsize] = useState({
        color: "brown",
        fontSize: 25
    });


    function decrement() {
        setCounter(--counter);
    }

    function btnclick(event) {
        //console.log(event);
        //event.preventDefault();
        console.log(event.target.style);
        console.log(event.target.classList);
        console.log('btnclick clicked');
        event.target.style.backgroundColor = "yellow";
        event.target.classList.add("makebig");
    }

    function changeColor(c, ev) {
        console.log(c)
        console.log(ev)
        // setColorme(state => {
        //     return {
        //         color: c
        //     }
        // });
        setColorme({ color: c });
    }

    function changeColorSize(action, event) {
        if (action === '+') {
            //setcolorsize({fontSize:colorsize.fontSize+1});
            // setcolorsize({
            //     ...colorsize,
            //     fontSize: colorsize.fontSize + 1
            // })
            setcolorsize(curstate => {
                return {
                    ...curstate,
                    fontSize: curstate.fontSize + 1
                }
            });
        } else if (action === '-') {
            setcolorsize({
                ...colorsize,
                fontSize: colorsize.fontSize - 1
            })
        }
    }

    function addToDoList() {

        // setTodo([...todo,{
        //     priority: priority,
        //     detail: detail
        // }])

        setTodo([{
            priority: priority,
            detail: detail
        }, ...todo])

    }

    function sortMe() {
        var obj = [...todo];
        obj.sort((a, b) => a.priority - b.priority);
        setTodo(obj);
    }

    function removeElem(elem, e) {
        e.preventDefault();
        //var new_items = todo.filter((v, i) => v != elem);
        // var new_todo_state = todo.filter(v => {
        //     if (v != elem)
        //         return v;
        // })
        //setTodo(new_todo_state);
        //setTodo([...new_todo_state]);

        setTodo(todo.filter(v => v != elem));

    }

    // last one is event
    // function checkEvent(e,one,two,three){
    //     console.log(e,one,two,three);
    // }

    return (
        <>
            <h1>Main Head</h1>
            <div>
                COUNTER:
                <span className="makebig">
                    {counter}
                </span>
            </div>
            <p>
                <button onClick={() => setCounter(++counter)}>+</button>
                <button onClick={decrement}>-</button>
            </p>
            <div style={colorme}>
                change my color to following button values
            </div>
            <button onClick={(event) => btnclick(event)}>Self Change</button>
            <button onClick={(event) => changeColor("green", event)}>GREEN</button>
            <button onClick={(e) => changeColor('red', e)}>RED</button>

            <hr />

            <div style={colorsize}>
                change my color to following button values
            </div>
            <button onClick={(e) => changeColorSize('+', e)}>+ Size</button>
            <button onClick={() => changeColorSize('-')}>- Size</button>

            <hr />
            <h2>Add to-do list with priority</h2>
            <input placeholder="Priority #" value={priority} onChange={e => setPriority(e.target.value)} />
            <input placeholder="To-do task detail" value={detail} onChange={e => setDetail(e.target.value)} />
            <button onClick={(e) => addToDoList()} key="addBtn">Add</button>
            
            <ul>
                {
                    todo.length ?
                    todo.map(v => {
                        return (
                            <li key={v.priority}>
                                {v.priority} = {v.detail}
                                <a href="" onClick={(e) => removeElem(v, e)}>remove</a>
                            </li>
                        )
                    }) : "Zero element in todo list"
                }
            </ul>

            <button onClick={sortMe}>Sort Todo</button>
            {/* {products.map((v, i) => <p key={i}>{v}</p>)} */}


        </>
    )
}