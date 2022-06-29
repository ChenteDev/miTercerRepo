/* let inventario = ["dados", "matraca", "Bomba de Gasolina", "150-D", 'Alternador', "Torquimetro", 'U']; //Unidimensional, vector, simple */

/* let miArrayBidimensional = [
    [1, 2, 3],
    ["a", "b", "c"],
    [true, false, true]
] 

let index = 0

console.log("Numero en posicion: ", index)
console.log(miArrayBidimensional[index][2]) */ //0


/* let myArray = [
  "La Chon - los tucanes de tijuana",
  "La Jaula de Oro - Los Tigres del Norte",
  "Los ovnis - Tropikal Forever",
  "Mi mayor anhelo - Banda MS",
];


for (let i =0; i < myArray.length; i++){
    console.log(myArray[i]);
} */



//for each


//map


//filter


//sort


//reduce




let myArrayExcercise = [
    [true, false, true],
    ["a","b","c"],
    6
]

/* for (let i =0; i < myArrayExcercise.length; i++){
    console.log(myArrayExcercise[i]);
}  */

/*
true
false
true
a
b
c
6
*/


for( let i=0; i < myArrayExcercise.length; i++){

    if(myArrayExcercise[i].length == undefined){
        console.log(myArrayExcercise[i])
    }else{
        for (let j=0; j < myArrayExcercise[i].length; j++)
        console.log(myArrayExcercise[i][j]);
    }
    
}


myArrayExcercise.forEach((list) => {
  if (list.length == undefined) {
    console.log(list);
    return;
  }
  list.forEach((element) => {
    console.log(element);
  });
});



let fruitnames =["Pina", "Manzana", "Pera", "Uva"]
console.log("Frutas: " , fruitnames)

//pop

fruitnames.pop()
console.log("Frutas despues de pop(): ", fruitnames)

//push

fruitnames.push('Melon')
console.log("Frutas despues de push(Melon): ", fruitnames)

//Crea una lista de canciones

let myPartySongs = [
    "Crawling - Linking Park",
    "Rollin - Limp Bizkit",
    "Infest - Papa Roach",
    "My Sacrifie - Creed"
  ];

//al presionar un boton se elimina la cancion del final
const deleteLastSong = () => {
    myPartySongs.shift()
    console.log(myPartySongs)
}
//al presionar un boton se elimina la cancion del principio
const deleteFirstSong = () => {
    myPartySongs.shift()
    console.log(myPartySongs)
}
//Un tercer boton para borrar todas las canciones

const deleteAllSongs = () => {
    myPartySongs = []
    console.log(myPartySongs)
}
//elimina dos canciones, la primera y la ultima
const deleteTwoSongsFirstNLast = () => {
    myPartySongs.push();
    myPartySongs.pop();
    console.log(myPartySongs);
}

