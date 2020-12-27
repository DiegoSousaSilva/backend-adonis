'use strict'

const Token = require('../../Models/Token');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class ResetPasswordController {
  async store({request}){
    const {token, password} = request.only([
      'token',
      'password'
    ])

    const userToken = await Token.findByOrFail('token', token);
    const user = await userToken.user().fetch();

    console.log(user, password);
    user.password = password;
    await user.save();

  }
}

module.exports = ResetPasswordController
