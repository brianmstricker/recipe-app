import axios from "axios";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 3600 });

const recipesController = (fasitfy, options, done) => {
 fasitfy.get("/", async (req, res) => {
  const cachedRecipes = cache.get("recipes");
  if (cachedRecipes) {
   console.log("from cache");
   res.send({ data: cachedRecipes });
   return;
  }
  const data = await axios.get(
   `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&cuisineType=American`
  );
  console.log(data.data);
  cache.set("recipes", data.data);
  res.send({ data: data.data });
 });
 done();
};

export default recipesController;
