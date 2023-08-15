import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { useState } from "react";

const ItemDetail = ({ img, tipo, marca, modelo, descripcion, precio }) => {
  const [cantidad, setCantidad] = useState(0);
  const handleDown = () => {
    if (cantidad > 0) {
      setCantidad((prev) => prev - 1);
    }
  };
  const handleUp = () => {
    setCantidad((prev) => prev + 1);
  };


  return (
    <Container sx={{display:"flex", alignItems:'center', justifyContent:'center', minHeight:"100vh"}}>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minWidth: 340,
          padding: 3
        }}
      >
        <CardMedia component="img" sx={{ height: 200 }} src={img}  title={tipo}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {marca} {modelo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography variant="h6">$ {precio}</Typography>
        </CardContent>
        <CardActions>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}alignItems={"center"}>
          <Box
            display={"flex"}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#333",
                "&:hover": { backgroundColor: "#555" },
              }}
              onClick={handleDown}
            >
              -
            </Button>
            <Typography variant="h5" textAlign={"center"} sx={{margin: 4}}>
              {cantidad}
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#333",
                "&:hover": { backgroundColor: "#555" },
              }}
              onClick={handleUp}
            >
              +
            </Button>
          </Box>
          <Box>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#333",
              "&:hover": { backgroundColor: "#555" },
            }}
          >
            Comprar
          </Button>
          </Box>
          </Box>
        </CardActions>
      </Card>
    </Container>
  );
};
export default ItemDetail;
