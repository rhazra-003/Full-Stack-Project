import * as React from "react";
import { Box, Link, Grid, Typography, Container } from "@mui/material";

import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${"https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300"})`,
    backgroundSize: "cover",
    backgroundPosition: "inherit",
    minHeight: "360px"
  },

  footercopyright: {
    backgroundColor: "#000",
    color: "#fff"
  }
});
const linkList1 = [
  "Home",
  "All Courses",
  "About Us",
  "Contact Us",
  "Success Stories"
];
const linkList2 = [
  "General Duty Assistant",
  "Medical Lab Technician",
  "Community Health Worker",
  "Bed Side Assistant",
  "Blood Bank Technician",
  "Pharmacy Assistant",
  "more..."
];
export default function Footer() {
  const classes = useStyles();
  const Links = ({ name }) => {
    return (
      <Link
        href="#"
        underline="none"
        color="primary.contrastText"
        component="div"
        variant="body1"
      >
        {name}
      </Link>
    );
  };
  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }} pt={8} pb={8}>
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <Typography
                  variant="h5"
                  color="primary.contrastText"
                  gutterBottom
                >
                  About us
                </Typography>
                <Typography variant="body2" color="primary.contrastText">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry.
                </Typography>
              </Grid>
              <Grid item md={4} xs={12}>
                <Typography
                  variant="h5"
                  color="primary.contrastText"
                  gutterBottom
                >
                  Quick Links
                </Typography>

                <List>
                  {linkList1.map((link) => {
                    return <Links name={link} />;
                  })}
                </List>
              </Grid>
              <Grid item md={4} xs={12}>
                <Typography
                  variant="h5"
                  color="primary.contrastText"
                  gutterBottom
                >
                  Courses
                </Typography>

                <List>
                  {linkList2.map((link) => {
                    return <Links name={link} />;
                  })}
                </List>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <div className={classes.footercopyright}>
        <Box sx={{ flexGrow: 1 }} pt={4} pb={4}>
          <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
              <Typography variant="body2" textAlign="center">
                Copyright © 2022 Skill Hub
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
