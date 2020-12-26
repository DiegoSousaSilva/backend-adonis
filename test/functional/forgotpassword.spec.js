const Factory = require('@adonisjs/lucid/src/Factory');

const { test, trait } = use('Test/Suite')('Session');

const Mail = use('Mail');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('it should send an email with reset password instructions', async ({assert, client})=>{

  const forgotPayload = {
    email: 'derickbenji2@gmail.com',
  }

  await Factory
  .model( 'App/Models/User')
  .create(forgotPayload)

  const response = await client
    .post('/forgot')
    .send(forgotPayload)
    .end()

  response.assertStatus(200);


  const recentEmail = Mail.pullRecent()
    assert.equal(recentEmail.message.to[0].address, forgotPayload.email)
    assert.equal(recentEmail.message.to[0].name, 'Joe')

    Mail.restore()

});

