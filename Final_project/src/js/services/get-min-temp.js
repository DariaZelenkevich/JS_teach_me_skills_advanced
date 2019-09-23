function getMinTemp(array){

    let min = array[0].temp_min;
    
    for (let i = 0; i < array.length; i++) {
        
        if (min > array[i].temp_min) {
            min = array[i].temp_min;
        }
    }
    return min;
}

export default getMinTemp;