import { Reducer, useContext } from "react"
import Context from "./Context"
import { typeInput, AddList,Remove, Modify } from "./FuncReducer"
function Func19() {
    var [reducer, dispatch] = useContext(Context);
    return (
        <div>
            <input value={reducer.typeInput} onChange={e => dispatch(typeInput(e.target.value))}></input>
            <button onClick={() => dispatch(AddList(reducer.typeInput))}>Ok</button>
            <p>{reducer.typeInput}</p>
            <ul>
                {reducer.listjobs.map((w, idx) => <li key={idx}>{w}
                    <button onClick={()=>dispatch(Remove(idx))}>xoa</button>
                    <button onClick={()=>dispatch(Modify(idx,reducer.typeInput))}>sua</button>
                </li>)}
            </ul>
        </div>
    )
}
// function ModifyElement(idx){
//     var [reducer, dispatch] = useContext(Context);
//     return(
//         <div>
//             <input onChange={e => dispatch(typeInput(e.target.value))}></input>
//         <button onClick={()=>}>Ok</button>
//         </div>
//     )
// }
export default Func19