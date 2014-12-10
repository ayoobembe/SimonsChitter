describe('homepage',function() {
  before(function() {
    casper.start('http://localhost:3000');
  });

  // it('should load css',function() {
  //   expect('site.css').should.be.loaded;
  // });

  it('Welcome message', function(){
    casper.then(function(){
      expect('body').to.contain.text("Welcome!");
    });
  });

  // it('Button SignUp', function(){
  //   casper.then(function(){
  //     expect(this.click('.signup')).to.redirectTo("/signup");
  //   });
  // });

  it('Button SignUp', function(){
    casper.then(function(){
      this.clickLabel('Sign up', 'button');
    });
  });

});
