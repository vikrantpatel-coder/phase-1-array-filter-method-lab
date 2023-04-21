const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers,name){
    return drivers.filter((driverName)=>{
    return driverName.toUpperCase() === name.toUpperCase();
    })
};

 
function fuzzyMatch(drivers,letters){
    let lengthOfLetters = letters.length;
    return drivers.filter((driverName)=>{
    return driverName.slice(0,lengthOfLetters) === letters;
})

};


function matchName(drivers,name){
    return drivers.filter((driverName)=>{
        return driverName.name.toUpperCase() === name.toUpperCase();
        })

}


