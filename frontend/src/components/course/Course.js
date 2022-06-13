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
import healthcare_img from "../../assests/SkillUp/health_care.jpg";

// Carousel CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import "./SkillDashboard.css";

import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import MainPage from "../Homepage/MainPage";
const food_img = "https://www.eufic.org/en/images/uploads/food-production/food-processing.png";
const agri_img ="https://www.iaea.org/sites/default/files/styles/original_image_size/public/cn-305-banner-1140x640.jpg?itok=mkXWvuMy";
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

const healthcare = [
  {
    title: "General Duty Assistant",
    notionalHours: "420hrs",
    labTraining: "180hrs",
    url: "https://www.nsdcindia.org/general-duty-assistant",
  },
  {
    title: "Blood Bank Technician",
    notionalHours: "420hrs",
    labTraining: "180hrs",
    url: "https://nsdcindia.org/blood-bank-technician",
  },
  {
    title: "Medical Laboratory Technician",
    notionalHours: "420hrs",
    labTraining: "180hrs",
    url: "https://nsdcindia.org/blood-bank-technician",
  },
];
const foodprocessing = [
  {
    title: "Craft Baker",
    notionalHours: "240 hrs",
    labTraining: "180hrs",
    url: "https://www.nsdcindia.org/general-duty-assistant",
  },
  {
    title: "Baking Technician",
    notionalHours: "240 hrs",
    labTraining: "180hrs",
    url: "https://nsdcindia.org/blood-bank-technician",
  },
  {
    title: "Pickle Making Technician",
    notionalHours: "240 hrs",
    labTraining: "180hrs",
    url: "https://nsdcindia.org/blood-bank-technician",
  },
];
const agriculture = [
  {
    title: "Dairy Farmer/ Entrepreneur",
    notionalHours: "200 hrs",
    labTraining: "180hrs",
    url: "https://www.nsdcindia.org/general-duty-assistant",
  },
  {
    title: "Diploma in Agri Input Management",
    notionalHours: "200 hrs",
    labTraining: "180hrs",
    url: "https://nsdcindia.org/blood-bank-technician",
  },
  {
    title: "B.Voc in Agriculture",
    notionalHours: "3 Years",
    labTraining: "180hrs",
    url: "https://nsdcindia.org/blood-bank-technician",
  },
];

const theme = createTheme();

export default function Course() {
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
              Courses
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Some of the most Popular Available Courses.
            </Typography>
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
          >
            <div>
              <img src={agri_img} />
              <div className="myCarousel">
                <h3>Dairy Farmer/ Entrepreneur</h3>
                <h4>Notational: 200hrs</h4>
                <p>
                  Learn the skills required to be a skillful dairy farmer and become an Entrepreneur.
                </p>
              </div>
            </div>

            <div>
              <img src={healthcare_img} />
              <div className="myCarousel">
                <h3>Blood Bank Technician</h3>
                <h4>Notational: 420hrs</h4>
                <p>
                  Develop and learn skills to be blood bank techician.
                </p>
              </div>
            </div>

            <div>
              <img src={food_img} />
              <div className="myCarousel">
                <h3>Pickle Making Technician</h3>
                <h4>Notational: 240 hrs</h4>
                <p>
                  Learn and enjoy making pickles for yourself, for your family and for people otherwise called customers.
                </p>
              </div>
            </div>
          </Carousel>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* Healthcare */}
          <Typography gutterBottom variant="h5">
            {" "}
            Healthcare
          </Typography>
          <Grid container spacing={4}>
            {healthcare.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    // sx={{
                    //   // 16:9
                    //   pt: "25.25%",
                    // }}
                    image={healthcare_img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>Notational: {card.notionalHours}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" startIcon={<AccountBox />}>
                      <a href="tel:+91-900-000-0000">Call 9000000000</a>
                    </Button>
                    <Button size="small">
                      <a
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Explore
                      </a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* Food Processing */}
          &nbsp; &nbsp; &nbsp;
          <Typography gutterBottom variant="h5">
            {" "}
            Food Processing
          </Typography>
          <Grid container spacing={4}>
            {foodprocessing.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    // sx={{
                    //   // 16:9
                    //   pt: "25.25%",
                    // }}
                    image={food_img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>Notational: {card.notionalHours}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" startIcon={<AccountBox />}>
                      <a href="tel:+91-900-000-0000">Call 9000000000</a>
                    </Button>
                    <Button size="small">
                      <a
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Explore
                      </a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* Agriculture */}
          &nbsp; &nbsp; &nbsp;
          <Typography gutterBottom variant="h5">
            {" "}
            Agriculture
          </Typography>
          <Grid container spacing={4}>
            {agriculture.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    // sx={{
                    //   // 16:9
                    //   pt: "25.25%",
                    // }}
                    image={agri_img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>Notational: {card.notionalHours}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" startIcon={<AccountBox />}>
                      <a href="tel:+91-900-000-0000">Call 9000000000</a>
                    </Button>
                    <Button size="small">
                      <a
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Explore
                      </a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div style={{display:"flex",justifyContent: "center",
  alignItems: "center", padding:"30px"}}>
          <Button href="/courseform" variant="contained">Enroll</Button>
          </div>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
