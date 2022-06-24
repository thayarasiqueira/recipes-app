export async function surpriseMeFood() {
  try {
    const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const request = await fetch(URL);
    const { meals } = await request.json();
    console.log(meals);
    return meals;
  } catch (error) {
    console.log(error);
  }
}

export async function surpriseMeDrinks() {
  try {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const request = await fetch(URL);
    const { drinks } = await request.json();
    console.log(drinks);
    return drinks;
  } catch (error) {
    console.log(error);
  }
}
