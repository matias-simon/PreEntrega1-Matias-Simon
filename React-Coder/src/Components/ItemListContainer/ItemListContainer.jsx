import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { getInstrumentos } from "../../productos/productos";


const ItemListContainer = ({ Greetings }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);

  useEffect(() => {
    getInstrumentos()
      .then((items) => setItem(items))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="fondo">
      <Typography variant="h2" sx={{ textAlign: "center", padding: "1rem" }}>
        {Greetings}
      </Typography>
      <ItemList itemList={item} />
    </div>
  );
};

export default ItemListContainer;
