import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/src/assets/namecard.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            ABOUT 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sellote, a BSIT student, wants to showcase the integration of React and Material-UI by 
            combining a custom calculator interface.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
