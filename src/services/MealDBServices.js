export default class mealDBServices{
    testFood= () => {
        return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
            .then(res => {return res.json();});
    };

    findAllRecipes = () =>{
        return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => {return res.json();});
    }

    findPopularRecipes = () =>{
        return fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
            .then(function(response){
                             return response.json();
                         });
    }
    // findAllCourses() {
    //     return fetch(this.COURSE_API_URL)
    //         .then(function(response){
    //             return response.json();
    //         });
    // }
}

