import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrink: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          setCocktail(newCocktail);
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);
  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
};

export default SingleCocktail;
