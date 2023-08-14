import React, { useEffect, useState } from "react";
import { getInstrumento } from "../../productos/productos";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import "./ItemDetailContainer";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getInstrumento(id)
      .then((response) => {
        setItem(response);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <Loading />;

  return (
    <div className="fondo">
     <ItemDetail {...item}/>
    </div>
  );
};

export default ItemDetailContainer;
