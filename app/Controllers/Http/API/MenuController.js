'use strict'

const { validate } = use('Validator')
const Database = use('Database')
const Staff = use('App/Models/Staff')
const RoleMenu = use('App/Models/RoleMenu')

class MenuController {
	async user({request, response}) {
		// Validation
		const rules = {
		}
	    const validation = await validate(request.all(), rules)
	    if (validation.fails()) {
	      	return response.status(500).json(validation.messages())
	    }
	    // Define Request Body
	    let post = request.post()
		const trx = await Database.beginTransaction() // Transaction Begin
		try {
			// Get Company
			let company = await Database
					  .select(
					  	// 'staff.userName as userName', 
					  	'companies.name as company',
					  	'companies.code as company_code'
					  	)
					  .table('staff')
					  .innerJoin('role_menus', 'role_menus.userName', 'staff.userName')
					  .innerJoin('companies', 'companies.code', 'role_menus.companyCode')
					  .where('staff.userName', 'admin')
					  // .groupBy(
					  // 	'staff.userName', 
					  // 	'companies.name',
					  // 	'companies.code'
					  // 	)
					  .first()
			// Get Menu
			let menu = await Database
					  .select(
					  	'menu_names.name as parent',
					  	'sub_menu_names.name as child_name',
					  	'sub_menu_names.url as child_url'
					  	)
					  .table('role_menus')
					  .innerJoin('menu_names', 'menu_names.id', 'role_menus.menuNameId')
					  .innerJoin('sub_menu_names', 'sub_menu_names.id', 'role_menus.subMenuId')
					  .where('role_menus.userName', 'admin')
			// Response
			let data_response = company
				data_response.list_menu = menu
			await trx.commit() // Transaction Commit
			return response.status(200).json(data_response)
    	} catch(e) {
    		await trx.rollback() // Transaction Rollback
	        return response.status(500).json()
	    }
	}

	async admin({request, response}) {
		// Validation
		const rules = {
		}
	    const validation = await validate(request.all(), rules)
	    if (validation.fails()) {
	      	return response.status(500).json(validation.messages())
	    }
	    // Define Request Body
	    let post = request.post()
		const trx = await Database.beginTransaction() // Transaction Begin
		try {
			// Get Company
			let company = await Database
					  .select(
					  	// 'staff.userName as userName', 
					  	'companies.name as company',
					  	'companies.code as company_code'
					  	)
					  .table('staff')
					  .innerJoin('role_menus', 'role_menus.userName', 'staff.userName')
					  .innerJoin('companies', 'companies.code', 'role_menus.companyCode')
					  .where('staff.userName', 'admin')
					  // .groupBy(
					  // 	'staff.userName', 
					  // 	'companies.name',
					  // 	'companies.code'
					  // 	)
					  .first()
			// Get Parent Menu
			let parent_menu = await Database
					  .select(
					  	'menu_names.id as parent_id',
					  	'menu_names.name as parent'
					  	)
					  .table('role_menus')
					  .innerJoin('menu_names', 'menu_names.id', 'role_menus.menuNameId')
					  .where('role_menus.userName', 'admin')
					  .groupBy(
					  	'menu_names.id',
					  	'menu_names.name'
					  	)
			let menu = []
			for (let i in parent_menu) {
				// Get Child Menu
				let child_menu = await Database
						  .select(
						  	'sub_menu_names.name as child_name',
						  	'sub_menu_names.url as child_url'
						  	)
						  .table('role_menus')
						  .innerJoin('sub_menu_names', 'sub_menu_names.id', 'role_menus.subMenuId')
						  .where('role_menus.userName', 'admin')
						  .where('role_menus.menuNameId', parent_menu[i].parent_id)
				menu.push({
					'parent': parent_menu[i].parent,
					'child': child_menu
				})
			}
			// Response
			let data_response = company
				data_response.list_menu = menu
			await trx.commit() // Transaction Commit
			return response.status(200).json(data_response)
    	} catch(e) {
    		await trx.rollback() // Transaction Rollback
	        return response.status(500).json()
	    }
	}
}

module.exports = MenuController
