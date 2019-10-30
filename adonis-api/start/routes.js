'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
    return { greeting: 'Hello world in JSON' }
})

Route.post('users/register', 'UserController.store');

Route.put('/:id', (req, res) => {

    const id = req.params.id;
    let userFilter;
    let index; //0

    users.filter((user, i) => {
        if (user.id === id) {
            userFilter = user;
            index = i;
        }

    });

    users[index] = {
        ...userFilter,
        ...req.body
    };

});

Route.delete('/:id', (req, res) => {

    userFilter = users.filter(user => user.id === req.params.id)[0];

    users = users.filter(user => user.id !== req.params.id)[0];

    res.json(userFilter);
});