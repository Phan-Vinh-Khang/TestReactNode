import { useState, useEffect, useLayoutEffect, useReducer, useRef, useCallback } from "react";
// import Show from "./testmemo";
import Show from "./testcallBackmemo";
function Func1() { //checkradio
  var [test, setTest] = useState();
  const obj = [
    {
      id: 1,
      name: 'a'
    }, {
      id: 2,
      name: 'b'
    }, {
      id: 3,
      name: 'c'
    }
  ];
  var showtext = () => {
    console.log(test)
  };
  return (
    <div className="wrap">{
      obj.map(a => (
        <div key={a.id}>
          <input type="radio"
            checked={test === a.name} //default checked sẽ là false vì chưa dc check
            onChange={() => { setTest(a.name) } //sau khi check sẽ reload lại funcreturnvềelement này
              /* Mỗi lần check sẽ render lại từng element
              sau khi load đến checked test===a.name sẽ return về true và sẽ checked lại ô vừa check khi nảy,
              những ô test!=a.name sẽ return về false và sẽ ko dc check
              */
            } />
          <label>{a.name}</label>
        </div>
      ))
    }
      <button onClick={showtext}>Ok</button>
    </div>
  )
}
function Func2() { //checkbox
  var [test, setTest] = useState([]);
  const obj = [
    {
      id: 1,
      name: 'a'
    }, {
      id: 2,
      name: 'b'
    }, {
      id: 3,
      name: 'c'
    }
  ];
  var showtext = () => {
    console.log(test)
  };
  return (
    <div className="wrap">{
      obj.map(a => (
        <div key={a.id}>
          <input type="checkbox"
            checked={test.includes(a.name)} //default checked sẽ là false vì chưa dc check
            onChange={() => {

              if (test.includes(a.name)) {
                //test.filter(i => i !== a.name) return a arr without a.name
                setTest(test.filter(i => i !== a.name)); //replace prevState
              }
              else {
                setTest(prev => [...prev, a.name])
              }
            }//sau khi check sẽ reload lại funcreturnvềelement này
              /* Mỗi lần check func setTest() sẽ chạy và sẽ render lại từng element
              sau khi load đến checked a.name có trong arr test sẽ return về true và sẽ checked lại ô vừa check khi nảy,
              những ô test!=a.name sẽ return về false và sẽ ko dc check
              */
            } />
          <label>{a.name}</label>
        </div>
      ))
    }
      <button onClick={showtext}>Ok</button>
    </div>
  )
}
function Func3() { //todo list 1
  var [list, setList] = useState([]);
  return (
    <div>
      <div>
        <input id="input1" placeholder="input here...."></input>
        <button onClick={() => {
          setList(w => [...w, document.getElementById("input1").value + " "])
        }}>Ok</button>
      </div>
      {
        list.map(w => <p>{w}</p>)
      }

    </div>
  )
}
function Func4() { //todo list 2
  var [list, setList] = useState([]);
  var [state, setState] = useState();
  console.log(list);
  return (
    <div>
      <div>
        <input value={state} onChange={w => setState(w.target.value)} id="input1" placeholder="input here...."></input>
        <button onClick={() => {
          setList(e => [...e, state])//luu vao static arr
          setState('');//khi da luu xong, cho state ref den string '' khi load lại input value dc xóa
        }}>Ok</button>
      </div>
      {
        list.map(w => <p>{w}</p>)
      }
    </div>
  )
}
var w = 0, g = 0;
function Func5() { //test useEffect()
  var [state, setState] = useState(1);
  //setState('a'); //nếu để setState ở đây nó sẽ liên tục reload lại function
  //console.log('a'); // setState phải đặt ở event như onclick,.... để ko liên tục callback lại function

  useEffect(() => {
    setState(w)
  }, [])
  return (
    <div>
      <input></input>
      <p>{state}</p>
      {console.log(state)}
    </div>
  )
}
function Func6() { //event with useEffect()
  var [state, setState] = useState(false)
  useEffect(() => {
    var test = () => {
      var w = window.scrollY
      console.log(w)
      if (w >= 200) {
        setState(true)
        //w>=200 sẽ call setState liên tục
        //sẽ chỉ call setState, ko reload lại nếu w>=200
        //(call setState sẽ check data static hiện tại và trước đó nếu data static hiện tại value vẫn giống data static trước sẽ ko reload)
      }
      else {
        setState(false)
        //w<200 sẽ call setState liên tục
        //sẽ chỉ call setState, ko reload lại nếu w<200
        //(call setState sẽ check data static hiện tại và trước đó nếu data static hiện tại value vẫn giống data static trước sẽ ko reload)

      }
    }
    window.addEventListener('scroll', test)
  })
  return (
    <div Style='height:10000px'>
      {
        (state && <p Style='position:fixed; bottom:50px;left:50px'>aaaa</p>)
      }
    </div>
  )
}
function Func7() { //setTimeinterval
  var [state, setState] = useState(0);
  // setInterval(()=>{
  //   setState(state-1);
  // },1000) mỗi lần reload sẽ setInterval() sẽ chạy 1 lần
  // sau khi reload setInterval() trước đó sẽ vẫn ton tai
  console.log('a');
  useEffect(() => {
    var timerInterval = setInterval(() => {
      setState(pre => pre + 1); //pre=>pre sẽ ref vào static trước
      return () => clearInterval(timerInterval) //func này sẽ chạy trước khi funcreturnvềelement này unmount
    }, 1000)
  }, [])//call static setInterval() 1 lần,mỗi giây setInterval() sẽ call setState()
  //check lại setInterval và setTimeout  
  return (
    <div>
      <h1>
        {state}
      </h1>
    </div>
  )
}
function Func8() { //chọn ảnh
  var [state, setState] = useState('')
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(state)
    }
  })
  var show = e => {
    const file = e.target.files[0]; //return list file dc chọn
    var obj = URL.createObjectURL(file)
    console.log(obj)
    setState(obj)
  }
  return (
    <div>
      <input type='file' onChange={show}></input>
      <div>

        <img src={state} Style='width:50%' />

      </div>
    </div>
  )
}
function Func9() { //
  return (
    <div>

    </div>
  )
}
function Func10() { //useLayoutEffect()
  var [state, setState] = useState(0)
  useLayoutEffect(() => {
    if (state > 3) {
      setState(0);
    }
  }, [state])
  // var test=()=>{
  //   setState((state+1>3?0:state+1)); // ko can dung useLayoutEffect()
  // }
  var test = () => {
    setState((state + 1));
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={test}>Ok</button>
    </div>
  )
}
function Func11() { //useRef()
  var [state, setState] = useState(0)
  var ref = useRef();
  useEffect(() => {
    ref.current = state
  }, [state]) //đặt state vào để useEffect check value static hiện tại và trước đó, nếu khác sẽ chạy useEffect()
  var test = () => {
    setState(state + 1)
  }
  console.log(state, ref.current);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={test}>Ok</button>
    </div>
  )
}
function Func12() { //memo()
  var [state, setState] = useState(0)
  var test = () => {
    setState(state + 1)
  }
  return (
    <div>
      <Show /> {/*check prop memo*/}
      <h1>{state}</h1>
      <button onClick={test}>Ok</button>
    </div>
  )
}
function Func13() { //callBack(,) và memo()
  var [state, setState] = useState(0)
  //mỗi lần reload sẽ create 1 static mới cho func
  var test = useCallback(() => {
    setState(pre => pre + 1)
  }, [])// nếu có deps và bị thay đổi khi reload sẽ create 1 static mới và test sẽ ref vào static mới,ko còn ref vào static trước đó nữa
  //sử dụng callBack để create static 1 lần cho func
  //những lần sau sẽ test sẽ ref đến static func đã create trước đó
  return (
    <div>
      <Show prop1={test} /> {/*check prop memo*/}
      <h1>{state}</h1>
    </div>
  )
}
function App() {

  return (
    <div className="App">
      <Func13 />
    </div>
  );
}

export default App;
