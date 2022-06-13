import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SchemeCard from "./Card";
import Loanform from "./Form";
import axios from "axios";
import crown from "../../assests/SkillUp/crown.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3];

const theme = createTheme();

export default function Scheme_new() {
  const [scheme, setScheme] = React.useState(0);

  const sendData = { income: 6000, course: 5 };
  const obj = JSON.stringify(sendData);

  console.log(obj);
  React.useEffect(() => {
    axios
      .post("http://127.0.0.1:5000/prediction", obj, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setScheme(res.data.res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Schemes open
            </Typography>
            \
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => {
              {
                /* console.log(
                "scheme",
                typeof scheme,
                Number(scheme),
                "card",
                typeof card
              );
              console.log(scheme); */
              }
              if (scheme === card) {
                return (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <img src={crown} width="170px" height="100px"></img>
                    <SchemeCard />
                  </Grid>
                );
              }
              return (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <SchemeCard />
                </Grid>
              );
            })}
          </Grid>
          {/* <div style={{display:"flex",justifyContent: "center",
  alignItems: "center", padding:"30px"}}>
          <Button href="/loan" variant="contained">Apply</Button>
          </div> */}
        </Container>
      </main>
      {/* <Loanform /> */}
    </ThemeProvider>
  );
}
