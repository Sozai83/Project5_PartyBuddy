//Look up a random cocktail - https://www.thecocktaildb.com/api.php 
const randomCocktailAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const filterCocktailsByIngredients = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='

export const pickCocktail = async (setResult: any) => {
    await fetch(randomCocktailAPI, { cache: 'no-store' })
        .then(cocktailData => {
            return cocktailData.json()
        }).then(
            jsonCocktailData => setResult(jsonCocktailData.drinks[0])
        );
}

const filterCocktail = async (ingredient: string, setFilter: any) => {
    const apiURL = filterCocktailsByIngredients + ingredient;
    await fetch(apiURL, { cache: 'no-store' })
        .then(filteredData => {
            return filteredData.json();
        }).then(
            jsonFilteredData => jsonFilteredData.drinks
        );
}

