import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div>
      <Container maxWidth="sm" sx={{ marginTop: '50px',color:'gray' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          required
          label="Name"
          margin="normal"
        />
        <TextField
          fullWidth
          required
          label="Email"
          type="email"
          margin="normal"
          defaultValue="abc@gmail.com"
        />
        <TextField
          fullWidth
          required
          label="Phone Number"
          type="tel"
          margin="normal"
          defaultValue="03001234567"
        />
        <TextField
          fullWidth
          required
          label="Message"
          multiline
          rows={4}
          margin="normal"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ margin: '28px 0px',backgroundColor: 'darkgreen', color:"white"  }}
        >
          Submit
        </Button >
      </Box>
    </Container>


    </div>
  )
}

export default Form
