const { Router } = require("express");
const router = Router();
const axios = require("axios");
const {
	login,
	register,
	createClient,
	makeLoanRepayment,
} = require("../controllers/employeeController");
const {
	validationLogin,
	validationRegister,
	validationCreateClient,
	validationRepayLoan,
} = require("../middlewares/employeeMiddleware");
 

const employeeController = require('../controllers/employeeController');
router.get('/',employeeController.listing);
//loan products listing 
 
module.exports = router;
