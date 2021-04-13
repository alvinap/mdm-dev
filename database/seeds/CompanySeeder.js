'use strict'

/*
|--------------------------------------------------------------------------
| CompanySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Company = use('App/Models/Company')

class CompanySeeder {
  async run () {
  	const companyData = [
		{
			'code': '001',
			'name': 'Kantor Pusat',
			'email': 'headoffice@mail.com'
		},
		{
			'code': '002',
			'name': 'Cabang Jakarta Selatan',
			'email': 'officeselatan@mail.com'
		}
  	]
  	await Company.createMany(companyData)
  }
}

module.exports = CompanySeeder
