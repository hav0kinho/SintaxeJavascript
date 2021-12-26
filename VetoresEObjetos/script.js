//Oque são vetores ou Arrays

/*let array = ['string', 1, true, ];
console.log(array);*/

// Pode guardar outros tipos de dados
let array = ['string', 1, true, ['array1', 2, 3], ['array2'], ['array3'], ['array4']];

//forEach
//array.forEach(function(item, index){console.log(item, index)})

//Array Push
//array.push('Novo Item');
//console.log(array);

//Array Pop
//array.pop();
//console.log(array)

//Array Shift
//array.shift();
//console.log(array);

//Array UnShift
//array.unshift('Novo item');
//console.log(array);

//Array indexOf
//console.log(array.indexOf(true))

//Array Splice
//array.splice(0, 3);
//console.log(array);

//array slice
//let novoArray = array.slice(0, 3);
//console.log(novoArray);

let pessoa = {
    nome: "Jonatas",
    idade: 19,
    feliz: false,
    pets: ["neeko", "paloma"],
    carros: {
        camaro: {
            placa: "K3F345",
            cor: "verde"
        },
        fusca: {
            placa: "23FUN5",
            cor: "preto"
        }
    },
    andar: function(km){
        alert(pessoa.nome + " andou " + km + " km");
    }

}

console.log(pessoa.carros.fusca.cor)

pessoa.andar(10);