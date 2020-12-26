const Factory = require('@adonisjs/lucid/src/Factory');

const { test, trait } = use('Test/Suite')('Session');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('it should return JWT token when session created', async ({assert, client})=>{

  const sessionPayload = {
    email: 'derickbenji2@gmail.com',
    password: '123456'
  }

  await Factory
    .model( 'App/Models/User')
    .create(sessionPayload)

  const response = await client
    .post('/sessions')
    .send(sessionPayload)
    .end()

response.assertStatus(200);
assert.exists(response.body.token);


});


/**
test('it should return JWT token when session created', async ({assert, client})=>{
  const user = await User.create({
    name: 'Diego Sousa',
    email: 'derickbenji2@gmail.com',
    password: '123456'
  })

  const response = await client
    .post('/sessions')
    .send({
      email: 'derickbenji2@gmail.com',
      password : '123456'
    })
    .end()

response.assertStatus(200);
assert.exists(response.body.token);


});
 */
