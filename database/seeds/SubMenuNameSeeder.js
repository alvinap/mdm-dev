'use strict'

/*
|--------------------------------------------------------------------------
| SubMenuNameSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const SubMenuName = use('App/Models/SubMenuName')

class SubMenuNameSeeder {
  async run () {
  	const subMenuNameData = [
		{
			'name': 'Title',
			'url': 'home/title'
		},
		{
			'name': 'Banner',
			'url': 'home/banner'
		},
		{
			'name': 'Active',
			'url': 'user/active'
		},
		{
			'name': 'Non-Aftive',
			'url': 'user/nonactive'
		}
  	]
  	await SubMenuName.createMany(subMenuNameData)
  }
}

module.exports = SubMenuNameSeeder
