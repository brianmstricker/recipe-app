import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const RecipeCard = ({ recipe }) => {
 return (
  <Card sx={{ maxWidth: 345 }} className="mx-auto w-full">
   <CardActionArea>
    <CardMedia
     component="img"
     image={recipe.image}
     alt={"image of " + recipe.label}
     sx={{
      maxHeight: 160,
      width: "100%",
      objectFit: "cover",
     }}
    />
    <CardContent>
     <Typography gutterBottom variant="h5" component="div">
      {recipe.label}
     </Typography>
     {/* <Typography variant="body2" color="text.secondary">
      {recipe.mealType}
     </Typography> */}
    </CardContent>
   </CardActionArea>
  </Card>
 );
};
export default RecipeCard;
