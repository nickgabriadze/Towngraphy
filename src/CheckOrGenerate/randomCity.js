export function randCity(cities){

    let randNumber = Math.floor(Math.random()*cities.length)
    let city = cities[randNumber]

    return city;
}

