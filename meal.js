let userinput = document.querySelector("#input");
let display = document.querySelector(".span-2");
let display2 = document.querySelector(".span-3");
userinput.addEventListener("change", (e) => {
  e.preventDefault();

  const inputValue = userinput.value;

  // Check if the input value is not empty
  if (!inputValue) {
    console.log("Please enter a valid input.");
    return;
  }

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.meals);

      if (data.meals && data.meals.length > 0) {
        // Assuming the API response contains meals
        display.innerText = data.meals[0].strInstructions;
        // display2.innerHTML= <img src={data.meals.strMealThumb} alt="" srcset=""></img>
      } else {
        display.innerText = "No matching meals found.";
        
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
