import { useState } from "react";
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
function App() {

  return (
    <div className="App">
      <Func4 />
    </div>
  );
}

export default App;
