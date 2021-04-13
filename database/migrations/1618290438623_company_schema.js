'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompanySchema extends Schema {
  up () {
    this.create('companies', (table) => {
      table.string('code', 255).primary()
      table.string('name', 255)
      table.string('email', 255)
      table.string('phoneNumber', 255).nullable()
      table.string('address', 255).nullable()
      table.boolean('isActive').default(true)
      table.timestamps()
      table.timestamp('deleted_at').nullable().defaultTo(null)
    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = CompanySchema
