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
			let data_restponse = company
				data_restponse.list_menu = menu
			await trx.commit() // Transaction Commit
			return response.status(200).json(data_restponse)
    	} catch(e) {
    		await trx.rollback() // Transaction Rollback
	        return response.status(500).json()
	    }
	}
}

module.exports = MenuController
