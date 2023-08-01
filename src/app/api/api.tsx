//Look up a random cocktail - https://www.thecocktaildb.com/api.php 
const randomCocktailAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
export const pickCocktail = async (setResult: any) => {
    await fetch(randomCocktailAPI, { cache: 'no-store' })
        .then(cocktailData => {
            return cocktailData.json()
        }).then(
            jsonCocktailData => setResult(jsonCocktailData.drinks[0])
        );
}