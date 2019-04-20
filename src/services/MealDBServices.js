export default class mealDBServices{
    testFood= () => {
        return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
            .then(res => {return res.json();});
    };

}
