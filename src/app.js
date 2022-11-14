const { developerFormatterToString } = require('./developer-formatter');
const express = require('express')
const app = express()
const port = 3000

app.get('/GetObjectStructure', (req, res, next) => {
	try {
		const employeeDetails = {
			firstName: 'David',
			lastName: 'Doe',
			age: 25,
			jobTitle: 'Backend Developer',
			nestedDeveloper: {
				hello: 'world2',
				age: 27,
				smoking: false
			}
		}
	
		const developer = {
			salary: 1000,
			details: employeeDetails,
			details2: [employeeDetails, employeeDetails]
		}

		const formattedDeveloper = developerFormatterToString(developer);
	
		res.type('text/plain').send(formattedDeveloper)
		next();
	} catch (error) {
		console.error('/GetObjectStructure -> error:', error);
		next(error);
	}
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
