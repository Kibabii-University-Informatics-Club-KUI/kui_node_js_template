require("dotenv").config();
const { Sequelize } = require("sequelize");
const configs = require("./config.json");
const fs = require("fs");
let sequelize;

if(fs.existsSync('/etc/pki/tls/private/digitallending.chamasoft.com.key')) {
	sequelize = new Sequelize(
		configs.database.database,
		configs.database.prodUser,
		configs.database.prodPassword,
		{
			host: process.env.DB_HOST || configs.database.host,
			port: process.env.DB_PORT || configs.database.port,
			dialect:
				process.env.DB_DIALECT ||
				configs.database.dialect /* 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
		}
	);

}else{
	 sequelize = new Sequelize(
		process.env.DB_NAME || configs.database.database,
		process.env.DB_USER || configs.database.user,
		process.env.DB_USER ? process.env.DB_PASSWORD : configs.database.password,
		{
			host: process.env.DB_HOST || configs.database.host,
			port: process.env.DB_PORT || configs.database.port,
			dialect:
				process.env.DB_DIALECT ||
				configs.database.dialect /* 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
		}
	);

}

(async () => {
	try {
		await sequelize.authenticate();
		console.log("💾 Database connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
})();


const { Employee } = require("./models/EmployeeModel");
const employee = Employee(sequelize);

const { User } = require("./models/UserModel");
const user = User(sequelize);

const { Department } = require("./models/DepartmentModel");
const department = Department(sequelize);

const { Hostel } = require("./models/HostelModel");
const hostel = Hostel(sequelize);


const migrateDb = process.env.MIGRATE_DB || configs.database.migrate;
if (migrateDb == "TRUE") {
sequelize.sync({force:false,alter:true}).then(() => {
		console.log(`All tables synced!`);
		process.exit(0);
	});
}

module.exports = {
	Employee,
	User,
	Department,
	Hostel,
};
