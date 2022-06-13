import * as React from "react";
import { Box, Grid, Typography, Divider, Container } from "@mui/material";

import { makeStyles } from "@mui/styles";
import BlogBox from "./BlogBox";
const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  contextSection: {
    paddingTop: "20px"
  },
  divider_img_section: {
    display: "flex",
    width: "32px",
    height: "32px",
    borderRadius: "100%",
    border: "1px solid #f97141",
    margin: "0 auto"
  },
  divider_img_responsive: {
    width: "100%",
    textAlign: "center",
    margin: "0 auto",
    padding: "4px",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center"
  }
});

export default function Blog() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root} maxWidth="lg">
        <Typography variant="h4" align="center" pb={2} pt={2}>
          Testimonials
        </Typography>
        <Divider>
          {/* <div className={classes.divider_img_section}></div> */}
        </Divider>
        <Typography
          variant="body2"
          align="center"
          sx={{ mx: "auto" }}
          maxWidth="sm"
          pb={4}
          pt={2}
          gutterBottom
        >
          Here are some of the testimonials from the past users, sharing their journey and experience.
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid mb={8} container spacing={2}>
            <BlogBox />
            {/* <BlogBox />
            <BlogBox /> */}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
