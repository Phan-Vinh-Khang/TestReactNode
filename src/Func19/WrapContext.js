import { useReducer } from "react";
import Context from "./Context";
import FuncReducer from "../FuncReducer";
function WrapElements({ children }) {
    var [reducer, dispatch] = useReducer(FuncReducer, {
        typeInput: '',
        listjobs: []
    })

    return (
        <Context.Provider value={[reducer, dispatch]}>
            {children}
        </Context.Provider>
    )
}
export default WrapElements