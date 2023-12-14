import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import SendIcon from "@mui/icons-material/Send";
const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="sm">
        {/* maxWidth="sm"===container ekran büyüse bile en fazla (sm) 550px ölçüsünde olsun */}
        {/* body: p etiketidir,body1 daha büyük fs ,body2 daha küçük font lu.  button=span etiketidir+büyük harf */}
        <Typography
          variant="h1"
          color="error"
          align="center"
          sx={{ background: "#eee", mt: 4, border: "1px solid red" }}
        >
          Typography Button Container Box
        </Typography>
        <Typography variant="button" color="primary.light">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </Typography>
        <Typography variant="body2" color="purple" align="center">
          Lorem ipsum dolor sit.
        </Typography>
        <h2>merhaba</h2>
      </Container>
      <hr />
      <Box sx={{ display: "flex", marginTop: 4, gap: 2, border:"1px solid blue"}}>
        <Button
          variant="contained"
          color="error"
          startIcon={<SendIcon sx={{marginRight:4, color:"blue"}}/>}
        >
          SEND
        </Button>

        <Button
          variant="outlined"
          color="success"
          endIcon={<DeleteSweepIcon color="error"/>}
        >
          DELETE
        </Button>
      </Box>
    </div>
  );
};

export default TypoButtons;
