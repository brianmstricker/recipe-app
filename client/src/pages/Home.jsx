import { useQuery } from "@tanstack/react-query";
import { API_ID } from "../util";
import { API_KEY } from "../util";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import { Typography } from "@mui/material";

const Home = () => {
 // const queryClient = useQueryClient();
 async function fetchRecipes() {
  const res = await axios.get(
   `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}&cuisineType=American`
  );
  return res.data.hits;
 }
 const { isPending, isError, data, error } = useQuery({
  queryKey: ["recipes"],
  queryFn: fetchRecipes,
 });
 if (isPending) {
  return <span>Loading...</span>;
 }
 if (isError) {
  return <span>Error: {error.message}</span>;
 }
 console.log(data);
 const recipes = data?.map((recipe) => recipe.recipe);
 return (
  <>
   <Typography variant="h2" component="h1" textAlign="center">
    Recipes
   </Typography>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto px-4 py-8">
    {recipes.map((recipe) => (
     <RecipeCard recipe={recipe} key={recipe.label} />
    ))}
   </div>
  </>
 );
};
export default Home;
