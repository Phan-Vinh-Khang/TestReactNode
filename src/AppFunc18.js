import { useContext } from "react"
import { Func18_Context } from "./App"
function Func18file2() {
    var dataContext = useContext(Func18_Context)
    console.log(dataContext)
    return (
        <div className={dataContext}>
            <p>test</p>
        </div>
    )
}
export default Func18file2
