import './App.css';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import 'bootstrap/dist/css/bootstrap.min.css';

function HomeScreen() {
  return (
    <div className="App">
      
      <div class="container-fluid">

        <div class="row">
          <div class="col">
            <Jumbotron style={{backgroundColor:"white"}}>
            <h1>Welcome to Publisher View</h1>
            <p >
              A complete platform to view all ad technologies, solutions for all industries, and dashboards for ad revenues
            </p>
            <p>
              <Button ButtonVariant="outline-secondary" variant="secondary">Learn more</Button>
            </p>
          </Jumbotron> 
          </div>
        </div>
        <div class="row">
          <div class="col">
          <Card>
            <Card.Img variant="top" src="https://admanager.google.com/home/static/images/gam/capabilities-overview-mod4_2x.jpg" />
            <Card.Body>
              <Card.Text>
                <Card.Title>Move from data to insights.</Card.Title>
              
                Get the tools you need to turn raw data into powerful insights

              </Card.Text>
            </Card.Body>
          </Card>
            
          </div>
          <div class="col">
          <Card>
            <Card.Img variant="top" src="./gam-home-mod2_2x.png" />
            <Card.Body>
              <Card.Text>
              <Card.Title>Solutions for every industry</Card.Title>
              
              We will help you manage your business and grow revenue

              </Card.Text>
            </Card.Body>
          </Card>
          
          </div>
        </div>

        <div class="row">
          <div class="col" style={{height:"100px"}}>

          </div>
        </div>


        <div class="row">
          <div class="col">
            
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="./tech.png" />
              <Card.Body>
                <Card.Title>Ad Technologies</Card.Title>
                <Card.Text>
                  Check all ad technologies implemented on your platform, how to access it and use it.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="./revenue.png" />
              <Card.Body>
                <Card.Title>Revenue Dashboard</Card.Title>
                <Card.Text>
                  Access a variety of ad revenue dashboards by platform, format, prgrammatic channels and more.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="./capabilities-brandsafety-mod4_2x.jpg" />
              <Card.Body>
                <Card.Title>Brand Safety</Card.Title>
                <Card.Text>
                  Check how are we protecting your site or app with strong advertising policies
                 and comprehensive ad reviews.

                </Card.Text>
              </Card.Body>
              <Card.Footer>
              </Card.Footer>
            </Card>
          </CardGroup>
            
          </div>
        </div>
      </div>
            
      <div class="row">
          <div class="col" style={{height:"100px"}}>

          </div>
        </div>
      
    </div>
  );
}

export default HomeScreen;
