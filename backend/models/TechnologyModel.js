const mongoose = require('mongoose');

// Technology Schema
const TechnologySchema = new mongoose.Schema(
    {
        techName: {
            type: String,
            required: true
        },
        techDescription: {
            type: String,
            required: true
        },
        techType: {
            type: String,
            required: true
        },
        techLogo: {
            type: String,
            required: true
        }
        
    }
);

// Technology Model
const TechnologyModel = mongoose.model('technologies', TechnologySchema);

// Export
module.exports = TechnologyModel;