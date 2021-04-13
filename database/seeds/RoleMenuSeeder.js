'use strict'

/*
|--------------------------------------------------------------------------
| RoleMenuSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const RoleMenu = use('App/Models/RoleMenu')

class RoleMenuSeeder {
  async run () {
  	const roleMenuData = [
		{
			'userName': 'admin',
			'menuNameId': 1,
			'subMenuId': 1,
			'companyCode': '001'
		},
		{
			'userName': 'admin',
			'menuNameId': 1,
			'subMenuId': 2,
			'companyCode': '001'
		},
		{
			'userName': 'admin',
			'menuNameId': 2,
			'subMenuId': 3,
			'companyCode': '001'
		},
		{
			'userName': 'admin',
			'menuNameId': 2,
			'subMenuId': 4,
			'companyCode': '001'
		},
		{
			'userName': 'user1',
			'menuNameId': 2,
			'subMenuId': 3,
			'companyCode': '002'
		},
		{
			'userName': 'user1',
			'menuNameId': 2,
			'subMenuId': 4,
			'companyCode': '002'
		}
  	]
  	await RoleMenu.createMany(roleMenuData)
  }
}

module.exports = RoleMenuSeeder
