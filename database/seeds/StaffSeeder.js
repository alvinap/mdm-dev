'use strict'

/*
|--------------------------------------------------------------------------
| StaffSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Staff = use('App/Models/Staff')

class StaffSeeder {
  async run () {
  	const staffData = [
		{
			'userName': 'admin',
			'password': 'admin',
			'positionId': 1,
			'fullName': 'Admin',
			'phoneNumber': '081xxx',
			'email': 'admin@mail.com',
			'address': 'Jakarta',
			'type': 'admin'
		},
		{
			'userName': 'user1',
			'password': 'user1',
			'positionId': 2,
			'fullName': 'User 1',
			'phoneNumber': '081xxx',
			'email': 'user1@mail.com',
			'address': 'Bekasi',
			'type': 'user'
		}
  	]
  	await Staff.createMany(staffData)
  }
}

module.exports = StaffSeeder
