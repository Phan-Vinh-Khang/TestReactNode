import { memo } from "react"
function Show(obj) {
    console.log('a')
    return (
        <div>
            <h1>test reload</h1>
            <button onClick={obj.prop1}>Ok</button> {/*khi reload onClick sẽ ref đến func static vừa dc create*/}
            {/* nếu ref đến staic mới prop sẽ thay đổi reload lại funcreturnvềelement này*/}
            {/* nếu sau khi reload vẫn ref đến static đã create trước đó(k thay đổi) k reload lại funcreturnvềelement này */}
        </div>
    )
}
export default memo(Show)
//mỗi lần reload sẽ check xem prop có thay đổi so với trước đó ko
// nếu ko thay đổi sẽ k reload lại
// nếu có 1 prop thay đổi sẽ reload lại