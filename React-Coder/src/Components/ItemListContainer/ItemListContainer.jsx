import { Typography } from '@mui/material'
import React from 'react'

const ItemListContainer = ({Greetings}) => {
  return (
    <>
    <Typography variant='h1' sx={{textAlign:'center'}}>{Greetings}</Typography>
    </>

  )
}

export default ItemListContainer

