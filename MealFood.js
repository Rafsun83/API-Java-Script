document.getElementById('fail-text').style.display = 'none';
const SearchFood = () => {
    //search food 
    const SearchInput = document.getElementById('Input_ID');
    const SearchText = SearchInput.value;

    SearchInput.value = '';
    document.getElementById('fail-text').style.display = 'none';
    if (SearchText == 0) {
        DisplayError();
    }
    else {


        //fetch food
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchText}`;
        fetch(url)
            .then(Response => Response.json())
            .then(data => DisplayFood(data.meals))

    }






}
const DisplayError = (error) => {
    document.getElementById('fail-text').style.display = 'block';
}

const DisplayFood = (data) => {
    //display food 
    const FoodResult = document.getElementById('foodResult');
    FoodResult.innerHTML = '';
    data.forEach(result => {
        console.log(result)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadDetails(${result.idMeal})" class="card h-100">
            <img src="${result.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${result.strMeal}</h5>
            <p class="card-text">${result.strInstructions.slice(0, 100)}</p>
            </div>
        </div>
        `;
        FoodResult.appendChild(div);

    });




}

const loadDetails = async (MealID) => {

    //fetch food id

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealID}`;
    const res = await fetch(url);
    const data = await res.json();
    DisplayDetails(data.meals[0]);


    // fetch(url)
    //     .then(Response => Response.json())
    //     .then(data => DisplayDetails(data.meals[0]))

}

const DisplayDetails = data => {
    //display food details 
    const DetailsFood = document.getElementById('food-details')
    DetailsFood.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card')

    div.innerHTML = `

              <img src="${data.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.strMeal}</h5>
                    <p class="card-text">${data.strInstructions.slice(0, 80)}</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
    `;
    DetailsFood.appendChild(div);

}