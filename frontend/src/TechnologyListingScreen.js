import './App.css';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MediaCard from './MediaCard';
import CardGroup from 'react-bootstrap/CardGroup';

import 'bootstrap/dist/css/bootstrap.min.css';
import { CardActions, CardMedia } from '@material-ui/core';

const technologies = [
    {
        techName: "GA",
        techDescription: "GA ewfhe febfkje fej fbje fje wfjk ewfew fjk ewf welfkewf e few few f",
        techType: "GA",
        techLogo: "https://cdn.iconscout.com/icon/free/png-256/google-analytics-2038769-1721667.png"
    },
    {
        techName: "GTM",
        techDescription: "GTM fewfwe fewfwe ",
        techType: "GTM",
        techLogo: "https://iconape.com/wp-content/files/jx/370961/svg/370961.svg"
    },
    {
        techName: "GAM",
        techDescription: "GAM fewf ",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM ewfew fewf ewf ewf ef ewf ew fewfew",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM fwef few",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM fweg wgwgw gwe ewgewg weg weg egwe gew gew gewg ew gewg we gewg ew weg ewg ewg wegwe gew ew ",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },
    {
        techName: "GAM",
        techDescription: "GAM",
        techType: "GAM",
        techLogo: "https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376"
    },

];

function TechnologyListingScreen() {
  return (
    
      
    <div class="container" style={{width: "790px",  marginTop: "50px"}}>
        <CardGroup style={{width: "750px", margin: "0 auto"}}>
        {
            technologies.map(
                (techObj) => {
                    return(
                        
                        
                     
                        <React.Fragment>
                        <MediaCard name={techObj.techName} description={techObj.techType} image={techObj.techLogo} />
                        <div style={{height:"100px"}}></div>
                        </React.Fragment>
                        
                    )
                }
            )
        }
        </CardGroup>
        <div class="row">
          <div class="col" style={{height:"400px"}}>

          </div>
        </div>
        </div>
        


      
        
        

       
      
    
  );
}

export default TechnologyListingScreen;
