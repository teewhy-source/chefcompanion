let userinput= document.querySelector("#input")
let display = document.querySelector(".span-2")
// let input2= document.querySelector("#2")
userinput.addEventListener('change',(e)=> {
    e.preventDefault()
    console.log(userinput.value);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userinput.value}`)
    .then(respond => {
        return respond.json()
    }).then(data => {
        console.log(data.meals)
        // console.log(data.meals[0].strMeal)
        // console.log(data.meals[0].strMealThumb);
        // console.log(data.meals[0].strYoutube);
        // console.log(data.meals[0].strInstructions);
        // console.log(data.meals[0].strSource);
     display.innerText = data.meals[0].strInstructions;
    })
})