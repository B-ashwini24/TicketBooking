
import React from 'react'

import Box from '@mui/material/Box';

const Seat = () => {
  return (
    <Box
      sx={{
        width: 30,
        height: 30,
        backgroundColor: 'red',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  )
}

export default Seat
