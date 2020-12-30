class Forgot {
  get rules() {
    return {
      // validation rules
      email: 'email|required',
    };
  }
}

module.exports = Forgot;
