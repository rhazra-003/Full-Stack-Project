import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

function Hero(props) {
  var items = [
    {
      name: "Welcome to Skills Root",
      description: "",
      img_src:
        "https://victor-mochere.com/wp-content/uploads/2019/11/How-to-build-a-successful-NGO-in-Kenya.jpg"
    },
    {
      name: "",
      description: "",
      img_src:
        "https://pbs.twimg.com/media/DXDQMxmW0AAzSuE?format=jpg&name=medium"
    },
    {
      name: "",
      description: "",
      img_src: "http://1.bp.blogspot.com/-nOzKTxPpO58/VEutMy5omZI/AAAAAAAAAQk/RRBYBc7qOvo/s1600/indian_ngo_word.png"
    }
  ];

  return (
    <Carousel
      next={() => {
        /* Do stuff */
      }}
      prev={() => {
        /* Do other stuff */
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

const useStyles = makeStyles({
  root: {
    position: "relative",
    height: "3 em"
  },
  img_responsive: {
    height: "700px",
    width: "100%"
  },
  sec: {
    position: "absolute",
    top: "30%",
    left: "10%",
    color: "#fff"
  }
});

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.sec}>
        <Typography variant="h3">{props.item.name}</Typography>
        <Typography variant="subtitle1">{props.item.description}</Typography>
      </div>

      <img className={classes.img_responsive} src={props.item.img_src} />
    </Paper>
  );
}

export default Hero;
