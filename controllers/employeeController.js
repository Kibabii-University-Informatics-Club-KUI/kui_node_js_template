const { default: Axios } = require("axios");
const config = require("../config.json");
const { Employee} = require("../db");
const https = require('node:https');
var JSON = require("querystring");
const { isEmpty } = require("lodash");
require("dotenv").config();

module.exports.listing = async (req, res, next) => {
console.log("listig employees");
	 
	
};

//retrieve client profile
 
 