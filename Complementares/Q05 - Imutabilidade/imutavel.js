/*
Descubra o que o código está fazendo e refatore-o para que o objeto criado permaneça intacto.
 */
const one = obj => {
    return {
        ...obj,
        d: 3
    }
}

const second = obj => {
    return one(obj)
}

const first = obj => {
    return second(obj)
}

const object = {k: 't'}
const object2 = first(object)

console.log(object, object2)