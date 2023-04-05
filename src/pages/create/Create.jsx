import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  styled,
  TextField,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import TitleIcon from "@mui/icons-material/Title";

const Create = () => {
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState(0);
  const navigate = useNavigate();
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[300],
    "&:hover": {
      backgroundColor: pink[100],
      scale: "0.9",
    },
  }));
  return (
    <Box
      paddingTop="40px"
      sx={{ width: { sm: "600px", xs: "400px" } }}
      height="200px"
      component="form"
    >
      <TextField
        onChange={(props) => {
          settitle(props.target.value);
        }}
        fullWidth
        label="UserName"
        sx={{ mt: "10px", display: "block" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TitleIcon sx={{ fontSize: "17px" }} />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
      <FormControl
        sx={{ width: { sm: "600px", xs: "400px" } }}
        variant="filled"
      >
        <FilledInput
          sx={{ mt: "10px" }}
          onChange={(props) => {
            // @ts-ignore
            setimage(props.target.value);
          }}
          fullWidth
          id="filled-adornment-weight"
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera sx={{ color: "#F06292" }} />
              </IconButton>
            </InputAdornment>
          }
          aria-describedby="filled-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>

      <TextField
        onChange={(eo) => {
          setprice(Number(eo.target.value));
        }}
        fullWidth
        label="Useremail"
        sx={{ mt: "10px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton
        onClick={(data) => {
          fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, price, image }),
          }).then(() => navigate("/"));
        }}
        sx={{ marginTop: "20px" }}
        variant="contained"
      >
        Add User <AddIcon sx={{ paddingLeft: "2px" }} />
      </ColorButton>
    </Box>
  );
};

export default Create;
