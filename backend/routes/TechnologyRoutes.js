const express = require('express');
const router = express.Router();
const TechnologyModel = require('../models/TechnologyModel.js'); 

// Technology listing route
router.get(
    '/',
    (req, res) => {
        TechnologyModel
        .find()
        .then(
            (document) => {
                console.log('Technology', document);
                res.send(document);
            }
        )
        .catch(
            (error) => {
                console.log('error', error)
            }
        )
    }
)

// Technology creation route
router.post(
    '/',
    (req, res) => {
       
        const formData = {
            techName: req.body.techName,
            techDescription: req.body.techDescription,
            techType: req.body.techType,
            techLogo: req.body.techLogo
        };

        const newTechnology = new TechnologyModel(formData);

        newTechnology
        .save()
        .then(
            (document) => {
                res.send(document)
            }
        )
        .catch(
            (error) => {
                console.log('error', error);
                res.send({'error': error})
            }
        )
    }
)

// Technology update route
router.post(
    '/update',
    (req,res) => {

        const formData = {
            techName: req.body.techName,
            techDescription: req.body.techDescription,
            techType: req.body.techType,
            techLogo: req.body.techLogo
        };
      
        TechnologyModel
        .updateOne({techName: formData.techName}, formData)
        .then(
            () =>
            {
                res.send('Technology updated successfully')
                console.log("Technology updated successfully")
            }
        )
            
        .catch(
            (error) => {
                console.log('error', error);
            }
        )

    }
)

module.exports = router;