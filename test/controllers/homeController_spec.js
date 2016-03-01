describe('Controller: CurrentPricing', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var HomeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Verified Controller is defined', function() {
      // for the purpose of this test, confirm the controller is
      // not undefined/null
      expect(HomeCtrl).toBeDefined();
      expect(HomeCtrl).not.toBeNull();
  });

  it('Expect controller to return the page Identifier and title', function () {
    expect(HomeCtrl.pageIdentifier).toBe('Home');
    expect(HomeCtrl.panelTitle).toBe('Explore the Mystical Underwater World of Cozumel with Dive GalaxSea');
  });
});