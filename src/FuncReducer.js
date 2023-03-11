function FuncReducer(state, obj) {
  if (obj.type == 'typeInput') {
    const objRes = {
      typeInput: obj.data,
      listjobs: [...state.listjobs]
    }
    return objRes;
  }
  else if (obj.type == 'AddList') {
    const objRes = {
      typeInput: '',
      listjobs: [...state.listjobs, obj.data]
    }
    return objRes
  }
  //return 1 static state và reload Func17() sau đó var reducer sẽ ref vào static này
  return 1
}
export default FuncReducer;