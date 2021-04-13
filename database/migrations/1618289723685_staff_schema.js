'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StaffSchema extends Schema {
  up () {
    this.create('staff', (table) => {
      table.string('userName', 255).primary()
      table.string('password', 255)
      table.integer('positionId').notNullable().index()
      table.string('fullName', 255).notNullable()
      table.string('phoneNumber', 255).notNullable()
      table.string('email', 255).notNullable()
      table.string('address', 255).nullable()
      table.boolean('isActive').default(true)
      table.string('type').nullable()
      table.timestamps()
      table.timestamp('deleted_at').nullable().defaultTo(null)
    })
  }

  down () {
    this.drop('staff')
  }
}

module.exports = StaffSchema
