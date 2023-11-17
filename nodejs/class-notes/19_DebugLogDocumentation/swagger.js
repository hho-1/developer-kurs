'user strict'

//  env Variables
require('dotenv').config()
const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1'

// npm i swagger-autogen
const swaggerAutogen = require('swagger-autogen')()
const packageJson=require('./package.json')

const document={
    info: {
		// version: "1.0.0",
		// title: "Personnel API",
		// description: "Personnel Management API Service",
		// termsOfService: "http://www.clarusway.com",
		// contact: { name: "Clarusway", email: "qadir@clarusway.com" },
		// license: { name: "BSD License", },
       

        version: packageJson.version,
		title: packageJson.title,
		description: packageJson.description,
		termsOfService: "http://www.clarusway.com",
		contact: { name: "Clarusway", email: "qadir@clarusway.com" },
		license: packageJson.license,
        host: `${HOST}:${PORT}`,
        basePath: '/',
        schemes: ['http', 'https'],
        // jwt kullandığımı swaggera bildirmem gerekiyor    
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: 'Entry Your AccessToken (JWT) for Login. Example: <b>Bearer <i>...token...<i></b>'
             }
            }     

	},
    security: [{ "JWT": true }],
    defination:{
         "Department" :require('./src/models/departmentModel').schema.obj,
         "Personnel" :require('./src/models/personnelModel').schema.obj

    }
    

}

const routes = ['./index.js']
const outputFile = './swagger.json'

// Create JSON file:
swaggerAutogen(outputFile, routes, document)