import * as React from "react";
import { CardMedia, Grid, Typography, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  contextSection: {
    paddingTop: "20px"
  }
});

export default function BlogBox() {
  const classes = useStyles();
  return (
    <>
      <Grid item md={4} xs={12}>
        <Card maxWidth="sm">
          <CardMedia
            className={classes.root}
            component="img"
            height="400"
            image="https://media.istockphoto.com/photos/happy-rural-women-farmer-in-mustard-field-picture-id1309083409?k=20&m=1309083409&s=612x612&w=0&h=nlYGB6wjQTmtjIcRVujPL6cinITeuTXQoTUmja4vg78="
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hema
            </Typography>
            <Typography
              sx={{ display: "flex" }}
              gutterBottom
              variant="body2"
              component="div"
            ></Typography>

            <Typography variant="body2" color="text.secondary">
              I enrolled in the stiching course back in 2019 and have started my own business and now i am providing jobs to others people in need.
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button color="secondary" size="small">
              Learn More
            </Button>
          </CardActions> */}
        </Card>
        
      </Grid>
      <Grid item md={4} xs={12}>
        <Card maxWidth="sm">
          <CardMedia
            className={classes.root}
            component="img"
            height="400"
            image="https://previews.123rf.com/images/stockimagesbank/stockimagesbank1901/stockimagesbank190100046/116489564-rural-indian-woman-harvesting-rapeseed-in-field.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rekha
            </Typography>
            <Typography
              sx={{ display: "flex" }}
              gutterBottom
              variant="body2"
              component="div"
            ></Typography>

            <Typography variant="body2" color="text.secondary">
            I enrolled in the farming course back in 2020 and have started doing farming much more efficiently hence inspiring a lot of young women.
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button color="secondary" size="small">
              Learn More
            </Button>
          </CardActions> */}
        </Card>
        
      </Grid>
      <Grid item md={4} xs={12}>
        <Card maxWidth="sm">
          <CardMedia
            className={classes.root}
            component="img"
            height="400"
            image="https://media.wired.com/photos/5fe3cde89444c63750532aac/master/w_2560%2Cc_limit/Business-Indian-Women-Mobile-Phones1135064286-2.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Jaya
            </Typography>
            <Typography
              sx={{ display: "flex" }}
              gutterBottom
              variant="body2"
              component="div"
            ></Typography>

            <Typography variant="body2" color="text.secondary">
            I enrolled in the bag making course back in 2020 and have started my own business and now i am providing jobs to others people in need.
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button color="secondary" size="small">
              Learn More
            </Button>
          </CardActions> */}
        </Card>
        
      </Grid>
    </>
  );
}
