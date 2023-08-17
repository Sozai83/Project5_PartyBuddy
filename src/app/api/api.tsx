//Look up a random cocktail - https://www.thecocktaildb.com/api.php 
const randomCocktailAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const filterCocktailsByIngredients = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
const searchCocktailById = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


export const pickCocktail = async (setResult: any) => {
    await fetch(randomCocktailAPI, { cache: 'no-store' })
        .then(cocktailData => {
            return cocktailData.json()
        }).then(
            jsonCocktailData => setResult(jsonCocktailData.drinks[0])
        );
}

const filterCocktail = async (ingredient: string) => {
    const apiURL = filterCocktailsByIngredients + ingredient;
    const id = await fetch(apiURL, { cache: 'no-store' })
        .then(filteredData => {
            return filteredData.json();
        }).then(
            jsonFilteredData => jsonFilteredData.drinks
    ).then(
        drinks => {
            const pickRandom = Math.floor(Math.random() * drinks.length) - 1;
            const selectedCocktail = drinks[pickRandom];
            return selectedCocktail.idDrink;
        }
    );
    return id;
}

export const getFilteredCocktail = async (ingredient: string, setResult: any) => {
    await filterCocktail(ingredient).then(id => {
        return searchCocktailById + id
    }).then(apiURL => fetch(apiURL, { cache: 'no-store' }))
        .then(cocktailData => {
            return cocktailData.json()
        }).then(
            jsonCocktailData => setResult(jsonCocktailData.drinks[0])
        );
}