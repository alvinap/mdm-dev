'use strict'

/*
|--------------------------------------------------------------------------
| MenuNameSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const MenuName = use('App/Models/MenuName')

class MenuNameSeeder {
  async run () {
  	const menuNameData = [
		{
			'name': 'Home',
			'url': '#'
		},
		{
			'name': 'User',
			'url': '#'
		}
  	]
  	await MenuName.createMany(menuNameData)
  }
}

module.exports = MenuNameSeeder
