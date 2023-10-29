import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const RecipeCard = ({ recipe }) => {
 return (
  <Card
   sx={{ maxWidth: 345 }}
   className="mx-auto w-full border-t border-t-black/60 border-l border-l-black/60 border-r border-r-black/60 relative"
  >
   <CardActionArea className="absolute inset-0 w-full h-full" />
   <CardMedia
    component="img"
    image={recipe.image}
    alt={"image of " + recipe.label}
    sx={{
     maxHeight: 180,
     width: "100%",
     objectFit: "cover",
    }}
    className="border-b border-b-black/60"
   />
   <CardContent>
    <Typography gutterBottom variant="h5" component="div">
     {recipe.label}
    </Typography>
    {/* <Typography variant="body2" color="text.secondary">
      {recipe.mealType}
     </Typography> */}
   </CardContent>
  </Card>
 );
};
export default RecipeCard;
