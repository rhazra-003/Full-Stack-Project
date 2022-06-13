// import "./styles.css";
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';

export default function CourseForm() {
  return (
    <div className="App">
      <h1>DEMO Course FORM </h1>
      <h3>
        Enter Your Interest 1: <br />
        <input className="input" type="text" />
      </h3>
      <h3>
      Enter Your Interest 2: <br />
        <input className="input" type="text" />
      </h3>
      
      <div style={{display:"flex",justifyContent: "center",
  alignItems: "center", padding:"30px"}}>
          <Button href="/course_new" variant="contained">Submit</Button>
          </div>
      {/* <Button variant="contained" href="/course" component="label" color="primary">
        {" "}
        Submit
        <input type="submit" hidden />
      </Button> */}
    </div>
  );
}