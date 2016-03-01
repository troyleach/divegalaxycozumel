describe('Controller: CurrentPricing', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var CurrentPricingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurrentPricingCtrl = $controller('CurrentPricingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Verified Controller is defined', function() {
      // for the purpose of this test, confirm the controller is
      // not undefined/null
      expect(CurrentPricingCtrl).toBeDefined();
      expect(CurrentPricingCtrl).not.toBeNull();
  });

  it('Expect controller to return the page Identifier and title', function () {
    expect(CurrentPricingCtrl.pageIdentifier).toBe('Current Pricing');
    expect(CurrentPricingCtrl.panelTitle).toBe('Learn About our Scuba Dive Courses & Diving Rates');
  });
});