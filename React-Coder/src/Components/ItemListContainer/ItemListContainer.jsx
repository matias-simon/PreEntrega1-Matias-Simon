import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { getCategory, getInstrumentos } from "../../productos/productos";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ Greetings }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState([]);
  const {id}= useParams()
  useEffect(() => {
    setIsLoading(true)
    const getData =  id ? getCategory : getInstrumentos
      getData(id)
      .then((items) => setItem(items))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [id]);

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