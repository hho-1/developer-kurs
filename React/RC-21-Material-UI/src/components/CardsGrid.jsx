import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const CardsGrid = () => {
  const [products, setProducts] = useState([]);

// gutterBottom;=alt margin

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  },[]);
console.log(products);
  return (
    <Container>
      <Typography variant="h3" align="center" color="error">
        CARD-GRIDS
      </Typography>

      <Grid container mt={4} spacing={2}>
        {products.map((a) => (
          <Grid item xs={6} md={4}>
            <Card sx={{ maxWidth: 400, height:450 }}>
              <CardMedia
                sx={{ height: 200,width:400 }}
                image={a.images[0]}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {a.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {a.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" startIcon={<ShareIcon/>}>
                  Share
                </Button>
                <Button size="small" variant="contained" color="error" endIcon={<DeleteForeverIcon/>}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardsGrid;
