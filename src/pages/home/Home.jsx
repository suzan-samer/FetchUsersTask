import { Box, CircularProgress, LinearProgress, Stack } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { Visibility } from "@mui/icons-material";
import { useGetuserByNameQuery } from "../../Redux/user";
import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { data, isLoading } = useGetuserByNameQuery();
  const [search, setSearch] = useState("");
  const navigate=useNavigate();
  console.log(data);
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", mt: "250px" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (data) {
    return (
      <Stack sx={{ mt: "20px" }}>
        <input
          style={{
            height: "50px",
            borderRadius: "15px",
            textAlign: "center",
            borderColor: "#EC407A",
          }}
          type="text"
          placeholder="Search here Please ..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <Stack
          direction="row"
          sx={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          {data.users
            .filter((value) => {
              if (search === "") {
                return value;
              } else if (
                value.firstName
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => {
              return (
                <Card
                  className="card"
                  key={item.id}
                  sx={{ maxWidth: 277, mt: "30px", mb: 6, mx: 1 }}
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.image}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{ color: "#EC407A", ml: "50px" }}
                    >
                      {item.firstName}
                    </Typography>
                    <Typography variant="body2" sx={{ ml: "30px" }}>
                      {item.email}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ ml: "50px" }}
                    >
                      {item.birthDate}
                    </Typography>
                  </CardContent>
                  <CardActions
                    disableSpacing
                    sx={{ justifyContent: "space-between" }}
                  >
                    <IconButton
                      aria-label="add to favorites"
                      onClick={() => {
                        navigate(`userDetails/${item.id}`)
                      }}
                    >
                      <Visibility />
                    </IconButton>
                    <Typography
                      variant="body1"
                      sx={{ color: "#EC407A", ml: "50px" }}
                    >
                      {" "}
                      {item.gender}
                    </Typography>
                  </CardActions>
                </Card>
              );
            })}
        </Stack>
      </Stack>
    );
  }
};

export default Home;
