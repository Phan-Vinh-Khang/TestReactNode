import clsx from "clsx"
import { useState } from "react"

import objCSS from "./CSS1.module.css"
function FuncCSS1({btn3}) {
    var [statebtn, setStatebtn] = useState({ btn1: true, btn2: false })

    var str = objCSS.testmodulecss + " " + objCSS.testmodulecss2
    var test = () => {
        if (statebtn.btn1 == true) {
            statebtn.btn1 = false
            setStatebtn({ btn2: true })
        }
        else {
            statebtn.btn2 = false
            setStatebtn({ btn1: true })
        }
    }

    return (
        <div>
            <button className={clsx(
                {
                    [objCSS.btn1]: statebtn.btn1,
                    [objCSS.btn2]: statebtn.btn2,
                    [objCSS.btn3]: btn3
                   
                }
            )} onClick={(test)}>
                Button1
            </button>
            {/* <p className={clsx(objCSS.testmodulecss, objCSS.testmodulecss2)}>aaaa</p> */}
        </div>
    )
}
export default FuncCSS1