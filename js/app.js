

document.getElementById('searchBtn').addEventListener('click', function () {
    var searchQuery = document.getElementById('searchQuery').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchQuery}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            foodItems(data);
        });
        document.getElementById('searchQuery').value = "";
});

    function foodItems(data) {
        const meals = data.meals;

        const foodDiv = document.getElementById('foodContainer');
        foodDiv.innerHTML = "";

        const foodDetails = document.getElementById('foodDetails');
        foodDetails.innerHTML = "";
        for (let i = 0; i < meals.length; i++) {
            const meal = meals[i];
            
            const food = `
            <div onclick="displayFoodDetails(${meal.idMeal})" class="col-sm-3 text-center">
                <div class="food-item">
                    <img src="${meal.strMealThumb}" class="img-fluid" alt="">
                    <h4 class="text-center">${meal.strMeal}</h4>
                    
                </div>
            </div>
            `;
            foodDiv.innerHTML += food;
        }
    }

    function displayFoodDetails(id) {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const foodDetails = document.getElementById('foodDetails');
                const foodItemDetails = `
            <div class="col-sm-6 mx-auto">
                <img src="${data.meals[0].strMealThumb}" class="img-fluid" alt="">
                <h2>${data.meals[0].strMeal}</h2>
                
                <h5>Ingredients: </h5>
                <hr>
                <ul id="ingredients"></ul>

                <h5>Instructions: </h5>
                <hr>
                <p>${data.meals[0].strInstructions}</p>
            </div>
            `;
                foodDetails.innerHTML = foodItemDetails;

                foodIngredients(data);
                // const ingredients = [
                //     'strIngredient1', 
                //     'strIngredient2', 
                //     'strIngredient3', 
                //     'strIngredient4', 
                //     'strIngredient5', 
                //     'strIngredient6', 
                //     'strIngredient7', 
                //     'strIngredient8', 
                //     'strIngredient9', 
                //     'strIngredient10', 
                //     'strIngredient11', 
                //     'strIngredient12', 
                //     'strIngredient13', 
                //     'strIngredient14', 
                //     'strIngredient15', 
                //     'strIngredient16', 
                //     'strIngredient17', 
                //     'strIngredient18',
                //     'strIngredient19',
                //     'strIngredient20'];
                //     ingredients.forEach( mealItem => {
                //         const ingredientItems = data.meals[0];
                //         const id = `idMeal`;
                //         console.log(ingredientItems.id);
                //         console.log(mealItem);
                //         const ingredientItem = ingredientItems.mealItem
                //         const li = document.createElement('li');
                //         li.innerText = ingredientItem;
                //         ul.appendChild(li);

                //     });
                // for (let i = 0; i < ingredients.length; i++) {
            
                //     const item = ingredients[i];
                //     console.log(item);
                //     const ingredientItems = data.meals[0];
                //     const ingredientItem = ingredientItems.item
                
                //     const li = document.createElement('li');
                //     li.innerText = ingredientItem;
                //     ul.appendChild(li);
                // }

            })
    }

    function foodIngredients(data){
        const allIngredients = [
            data.meals[0].strIngredient1,
            data.meals[0].strIngredient2,
            data.meals[0].strIngredient3,
            data.meals[0].strIngredient4,
            data.meals[0].strIngredient5,
            data.meals[0].strIngredient6,
            data.meals[0].strIngredient7,
            data.meals[0].strIngredient8,
            data.meals[0].strIngredient9,
            data.meals[0].strIngredient10,
            data.meals[0].strIngredient11,
            data.meals[0].strIngredient12,
            data.meals[0].strIngredient13,
            data.meals[0].strIngredient14,
            data.meals[0].strIngredient15,
            data.meals[0].strIngredient16,
            data.meals[0].strIngredient17,
            data.meals[0].strIngredient18,
            data.meals[0].strIngredient19,
            data.meals[0].strIngredient20
        ];
        const ul = document.getElementById('ingredients');
        allIngredients.forEach( mealItem => {
            if(mealItem!="" && mealItem!=null){
                console.log(mealItem);
                const li = document.createElement('li');
                li.innerText = mealItem;
                ul.appendChild(li);
            }
        });
    }