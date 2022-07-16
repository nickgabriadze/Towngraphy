export function checkCity(dict, city){

    const FirstLetter = city[0]
    const LenOfThatCharValue = dict[FirstLetter].length


    for(let i = 0; i < LenOfThatCharValue; i++) {
        if(dict[FirstLetter][i] === city){
            return true;
        }    
    }
    
    return false;
}

