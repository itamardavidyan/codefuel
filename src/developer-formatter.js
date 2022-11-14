const developerFormatter = (developer) => {
	try {
		const response = ['Object:', '------------------------------'];
		for (const key in developer) {
			switch (typeof developer[key]) {
				case 'string':
				case 'number':
				case 'boolean':
					response.push(`\t${key} = ${JSON.stringify(developer[key])}`);
					break;
				case 'object':
					const developers = Array.isArray(developer[key]) ? developer[key] : [developer[key]]

					response.push(`\t${key} =`)
					for (const developer of developers) {
						const formattedDeveloper = developerFormatter(developer);
						response.push(...formattedDeveloper.map(line => '\t' + line));
					}
					break;
				default:
					throw new Error('Unknown type');
			}
		}

		return response;
	} catch (error) {
		console.error(error);
		return []; // if we want that failure of one field will not affect all the method response
	}
}

exports.developerFormatterToString = (developer) => {
	return developerFormatter(developer).join('\n');
}

// const employeeDetails = {
// 	firstName: 'David',
// 	lastName: 'Doe',
// 	age: 25,
// 	jobTitle: 'Backend Developer',
// 	nestedDeveloper: {
// 		hello: 'world',
// 		age: 27,
// 		smoking: false
// 	}
// }

// const developer = {
// 	salary: 1000,
// 	details: employeeDetails,
// 	details2: [employeeDetails, employeeDetails]
// }

// console.log(this.developerFormatterToString(developer))
