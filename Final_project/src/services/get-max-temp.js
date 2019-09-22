function getMaxTemp(array){

    let max = array[0].temp_max;

    for (let i = 0; i < array.length; i++) {

        if (max < array[i].temp_max) {
            
            max = array[i].temp_max; 
        }
    }

    return max;
}

export default getMaxTemp;