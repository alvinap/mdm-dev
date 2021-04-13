'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoleMenuSchema extends Schema {
  up () {
    this.create('role_menus', (table) => {
      table.increments()
      table.string('userName', 255)
      table.integer('menuNameId').index()
      table.integer('subMenuId').index()
      table.string('companyCode', 255).index()
      table.timestamps()
      table.timestamp('deleted_at').nullable().defaultTo(null)
    })
  }

  down () {
    this.drop('role_menus')
  }
}

module.exports = RoleMenuSchema
