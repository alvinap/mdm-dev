'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PositionSchema extends Schema {
  up () {
    this.create('positions', (table) => {
      table.increments()
      table.string('name', 255)
      table.timestamps()
      table.timestamp('deleted_at').nullable().defaultTo(null)
    })
  }

  down () {
    this.drop('positions')
  }
}

module.exports = PositionSchema
