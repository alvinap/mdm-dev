'use strict'

/*
|--------------------------------------------------------------------------
| PositionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Position = use('App/Models/Position')

class PositionSeeder {
  async run () {
  	const positionData = [
		{
			'name': 'Admin'
		},
		{
			'name': 'User'
		}
  	]
  	await Position.createMany(positionData)
  }
}

module.exports = PositionSeeder
