import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import './Css/HomePage.css';

function HomePage() {
  function createData(days, adults, childrens, groups, school) {
    return { days, adults, childrens, groups, school };
  }
  
  const rows = [
    createData(
      "WEEK EXEPT WEDNESDAY",
      "24€",
      "12€",
      "20€/people (10€/child)",
      "10€/child"
    ),
    createData(
      "WEEK-END AND WEDNESDAY",
      "34€",
      "20€",
      "28€/people (16€/child)",
      "//"
    )
  ];
  
  return (
    <>
      <div className="intro">
        <h2>Come to...</h2>
        <div className="card-group">
          <Card className="home-card">
            <CardContent>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                ..Laugh
              </Typography>
              <Typography variant="p" component="p">
                As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.
              </Typography>
            </CardContent>
          </Card>
          <Card className="home-card">
            <CardContent>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                ..Dream
              </Typography>
              <Typography variant="p" component="p">
                Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination.
              </Typography>
            </CardContent>
          </Card>
          <Card className="home-card">
            <CardContent>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                ..Marvel at
              </Typography>
              <Typography variant="p" component="p">
                Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch these fierce felines turn into sweet kittens.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="about-us">
        <h2>Who are us?</h2>
        <Card className="about-card">
          <CardContent>
            <Typography variant="p" component="p">
              Created in France in 1993, we are a troupe of international artists presenting you a lot of shows having for each a rich and varied universe... we are the Wild Circus! <br/>
              We produced explusively in France until 2010, the popularity and variety of our shows is currently pushing us to travel the whole of Europe and tomorrow the whole world!<br/>
              Let yourself be trained and come to discover our worlds, our dancers, trapeze artists, clowns, acrobats, musicians and other fire-eaters.
              The Wild Circus performs in all the major cities of europe to make dream young and oldalike!!
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="prices">
        <h2>Come and discover our magic prices!</h2>
        <div className="table">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Days</TableCell>
                  <TableCell align="right">ADULTS</TableCell>
                  <TableCell align="right">
                    CHILDRENS
                    <br />
                    (Under 12 yers old)
                  </TableCell>
                  <TableCell align="right">
                    GROUPS
                    <br />
                    (More than 10 people)
                  </TableCell>
                  <TableCell align="right">SCHOOLS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.days}>
                    <TableCell component="th" scope="row">
                      {row.days}
                    </TableCell>
                    <TableCell align="right">{row.adults}</TableCell>
                    <TableCell align="right">{row.childrens}</TableCell>
                    <TableCell align="right">{row.groups}</TableCell>
                    <TableCell align="right">{row.school}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default HomePage;