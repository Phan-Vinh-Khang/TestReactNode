function FuncReducer(state, obj) {
    if (obj.type == 'typeInput') {
        return {
            typeInput: obj.data,
            listjobs: state.listjobs
        }
    }
    else if (obj.type == 'AddList') {
        return {
            typeInput: state.typeInput, //obj.data
            listjobs: [...state.listjobs, obj.data]
        }
    }
    else if (obj.type == 'Remove') {
        state.listjobs.splice(obj.data, 1)
        return {
            typeInput: '',
            listjobs: state.listjobs
        }
    }
    else if (obj.type == 'Modify') {
        for (let i=0;i<state.listjobs.length;i++){
            if(i==obj.index){
                state.listjobs[i]=state.typeInput;
            }
        }
        return {
            typeInput: '',
            listjobs: state.listjobs
        }
    }
    return 1;
}
function typeInput(data) {
    return {
        type: 'typeInput',
        data: data
    }
}
function AddList(data) {
    return {
        type: 'AddList',
        data: data
    }
}
function Remove(index) {
    return {
        type: 'Remove',
        data: index
    }
}
function Modify(index,data) {
    return {
        type: 'Modify',
        index: index,
        data: data
    }
}

export default FuncReducer; //cho phép 1 file js khác import func này vào file
export { typeInput, AddList, Remove, Modify }