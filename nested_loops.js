
// snippet 3

let friends = ["philip","abby","phelipe","simcha"];

for(let i = 0;i <friends.length;i++){

    for(let j = 0; j<friends.length; j++){
        console.log(friends[i], friends[j]);
    }
}

///////////////////////////////////////////////////////////////////////


console.log("--------------------------------------------------------------")
let locations =["flatbush","williamsburg","bushwick"];

for (let i = 0;i < locations.length; i++){
    for( let j =i + 1; j< locations.length; j++ ){

        console.log(locations[i],locations[j]);    
    
    } 
}