describe('homepage',function() {
  before(function() {
    casper.start('http://localhost:3000');
  });

  it('Welcome message', function(){
    casper.then(function(){
      expect('body').to.contain.text("Welcome!");
    });
  });
  it('Button SignUp', function(){
    casper.then(function(){
      expect('body')
    })
  })
});
