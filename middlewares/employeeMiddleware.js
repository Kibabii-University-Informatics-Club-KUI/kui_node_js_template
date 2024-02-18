const yup = require('yup');
const { MifosUser } = require("../db");

// ========================================================================

// Schema - Login
let schemaLogin = yup.object().shape({
	username: yup.string().required('Please enter Username'),
	password: yup.string().required('Please enter Password'),
});

// Validation - Login
module.exports.validationLogin = (req, res, next) => {
	// validations here
	console.log('🐞 validationLogin');

	schemaLogin
		.validate(
			{
				username: req.body.username,
				password: req.body.password,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
			return next(err);
		});
}

// ========================================================================
// Schema - Register
let schemaRegister = yup.object().shape({
	username: yup.string().required('Please enter Username'),
	firstname: yup.string().required('Please enter Firstname'),
	lastname: yup.string().required('Please enter Lastname'),
	email: yup.string().required('Please enter Email'),
});

// Validation - Register
module.exports.validationRegister = (req, res, next) => {
	// validations here
	console.log('🐞 validationRegister');

	schemaRegister
		.validate(
			{
				username: req.body.username,
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				email: req.body.email,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
			return next(err);
		});
}

// ========================================================================
// Schema - Create Client
let schemaCreateClient = yup.object().shape({
	officeId: yup.number().required('Please enter Office ID'),
	firstname: yup.string().required('Please enter Firstname'),
	lastname: yup.string().required('Please enter Lastname'),
	externalId: yup.string().required('Please enter External ID')
});

// Validation - Create Client
module.exports.validationCreateClient = (req, res, next) => {
	// validations here
	console.log('🐞 validationCreateClient');

	schemaCreateClient
		.validate(
			{
				officeId: req.body.officeId,
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				externalId: req.body.externalId,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
			return next(err);
		});
}

// ========================================================================
// schema - repay loan
let schemaRepayLoan = yup.object().shape({
	loanId: yup.number().required('Please enter Loan ID'),
	paymentTypeId: yup.number().required('Please enter Payment Type ID'),
	transactionAmount: yup.number().required('Please enter Transaction Amount'),
	note: yup.string(),
	trasactionDate: yup.string(),
});

// Validation - Repay Loan
module.exports.validationRepayLoan = (req, res, next) => {
	// validations here
	console.log('🐞 validationRepayLoan');

	schemaRepayLoan
		.validate(
			{
				loanId: req.body.loanId,
				paymentTypeId: req.body.paymentTypeId,
				transactionAmount: req.body.transactionAmount,
				note: req.body.note,
				trasactionDate: req.body.trasactionDate,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
			return next(err);
		});
}
