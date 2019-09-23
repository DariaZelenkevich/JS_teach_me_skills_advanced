function getMaxRepetitiveIcon(item){

    const counter = item.reduce((o, i) => {

        if (!o.hasOwnProperty(i.weather_icon)) {

            o[i.weather_icon] = 0;
        }

        o[i.weather_icon]++;
        return o;
        
    }, {});

    const result = Object.keys(counter).map(id => {

        return {id: id, sum: counter[id]};
    });

    let max = result[0].sum;
    let oftenWeatherIconId = result[0].id;

    for (let j = 0; j < result.length; j++) { 

        if (max < result[j].sum) {

            max = result[j].sum;
            oftenWeatherIconId =  result[j].id;
        } 
    }

    return oftenWeatherIconId;
}

export default getMaxRepetitiveIcon;