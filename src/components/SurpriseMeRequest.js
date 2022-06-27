export async function surpriseMeFood() {
  try {
    const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const request = await fetch(URL);
    const { meals } = await request.json();
    const idFood = meals[0].idMeal;
    return idFood;
  } catch (error) {
    console.log(error);
  }
}

export async function surpriseMeDrinks() {
  try {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const request = await fetch(URL);
    const { drinks } = await request.json();
    const idDrinks = drinks[0].idDrink;
    return idDrinks;
  } catch (error) {
    console.log(error);
  }
}
