'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// routes for operator panel
Route.on('/').render('welcome')

// routes for api
Route.group(() => {
	Route.get('menu/user', 'API/MenuController.user')
	Route.get('menu/admin', 'API/MenuController.admin')
}).prefix('api')