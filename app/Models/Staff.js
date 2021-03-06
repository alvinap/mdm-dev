'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Staff extends Model {
	static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (staffInstance) => {
      if (staffInstance.dirty.password) {
        staffInstance.password = await Hash.make(staffInstance.password)
      }
    })
  }
}

module.exports = Staff
