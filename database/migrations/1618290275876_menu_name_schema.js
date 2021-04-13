'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MenuNameSchema extends Schema {
  up () {
    this.create('menu_names', (table) => {
      table.increments()
      table.string('name', 255)
      table.string('url', 255).nullable()
      table.timestamps()
      table.timestamp('deleted_at').nullable().defaultTo(null)
    })
  }

  down () {
    this.drop('menu_names')
  }
}

module.exports = MenuNameSchema
