describe('Controller: ReefMap', function() {
  beforeEach(module('myApp'));
  var ReefMapCtrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    reefMapCtrl = $controller('ReefMapCtrl', {
      $scope: scope 
    })
  }))

  it('Verify Controller is defined', function(){
    expect(reefMapCtrl).toBeDefined();
    expect(reefMapCtrl).not.toBeNull();
  })

  it('Expect controller to return the page Identifier and title', function () {
    expect(reefMapCtrl.pageIdentifier).toBe('Reef Map');
    expect(reefMapCtrl.panelTitle).toBe("Don't Imagine Paradise, Visit Cozumel!");
  });

});
