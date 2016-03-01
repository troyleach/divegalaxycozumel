describe('Controller: AboutCozumel', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var AboutCozumelCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCozumelCtrl = $controller('AboutCozumelCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Verified Controller is defined', function() {
      // for the purpose of this test, confirm the controller is
      // not undefined/null
      expect(AboutCozumelCtrl).toBeDefined();
      expect(AboutCozumelCtrl).not.toBeNull();
  });

  it('Expect controller to return the page Identifier and title', function () {
    expect(AboutCozumelCtrl.pageIdentifier).toBe('About Cozumel');
    expect(AboutCozumelCtrl.panelTitle).toBe('Go Diving in Cozumel and Explore the Mesmerizing Coral Reefs!');
  });
});
