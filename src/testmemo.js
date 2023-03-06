import { memo } from "react"
function Show(){
    console.log('a')
    return(
        <div>
            <h1>test reload</h1>
        </div>
    )
}
export default memo(Show)
//mỗi lần reload sẽ check xem prop có thay đổi so với trước đó ko
// nếu ko thay đổi sẽ k reload lại
// nếu có 1 prop thay đổi sẽ reload lại