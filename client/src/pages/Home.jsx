import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import { Skeleton } from "@mui/material";

const Home = () => {
 async function fetchRecipes() {
  const res = await axios.get("/recipes");
  console.log(res);
  return res.data.hits;
 }
 const { isPending, isError, data, error } = useQuery({
  queryKey: ["recipes"],
  queryFn: fetchRecipes,
 });
 if (isPending) {
  return (
   <>
    <div>
     <Skeleton />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto py-8">
     {Array.from({ length: 20 }).map((_, i) => (
      <Skeleton
       key={i}
       variant="rounded"
       height={280}
       className="mx-auto w-full max-w-[345px] bg-gray-200/90"
       animation="wave"
      />
     ))}
    </div>
   </>
  );
 }
 if (isError) {
  return <span>Error: {error.message}</span>;
 }
 console.log(data);
 const recipes = data?.map((recipe) => recipe.recipe);
 return (
  <>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto py-8">
    {recipes.map((recipe) => (
     <RecipeCard recipe={recipe} key={recipe.label} />
    ))}
   </div>
  </>
 );
};
export default Home;
