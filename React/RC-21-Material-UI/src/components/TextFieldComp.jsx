import { Avatar, Box, Button, Container, FormControl, Input, InputAdornment, InputLabel, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
const TextFieldComp = () => {
  let error = true;

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <div>
      <Container>
        <Typography variant="h4" align="center" color="error">
          TEXT-FIELD (input)
        </Typography>

        <Box sx={{ mt: 4 }}>
          <TextField
            margin="dense"
            fullWidth
            id="outlined-basic"
            label="Outlined"
          />
          {/* defaultta label input outline çizgisinde gelir, variant=filled diyerek label ı input alanına alabiliriz */}
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            margin="dense"
          />
          {/* defaultValue="Hello World" başlangıçta input içinde bulunan değer, bu olunca label direk border ın içinde geliyor */}
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            fullWidth
            margin="dense"
          />

          <TextField
            margin="dense"
            error={error}
            type="password"
            id="outlined-error-helper-text"
            // label="Error"
            placeholder="password giriniz"
            helperText={error && "yanlış girdiniz"}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
            margin="dense"
          >
            {currencies.map((a) => (
              <MenuItem value={a.value}>{a.label}</MenuItem>
            ))}
          </TextField>

          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle color="error" />
                </InputAdornment>
              }
            />
          </FormControl>

          <Button fullWidth color="error" variant="contained" sx={{mt:4}}>
            SUBMIT
            <Avatar
              alt="Remy Sharp"
              src="https://media.istockphoto.com/id/1278564529/tr/foto%C4%9Fraf/mavi-renk-arka-plan-izole-ye%C5%9Fil-g%C3%B6mlek-giyen-esmer-k%C4%B1sa-sa%C3%A7l%C4%B1-sevimli-g%C3%BCl%C3%BCmseyen-g%C3%BCzel-k%C4%B1z.jpg?s=612x612&w=0&k=20&c=qMtjAb1sXxeqOgUHYjWskspY58UyahQsyeu7ZPVgtUQ="
            />
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
