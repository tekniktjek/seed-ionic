describe('Services:', function() {
    beforeEach(function() {
        module('ionic-firebase-seed');
    });

    describe('Auth service', function() {
        var expectedValue = {};
        var fbAuth;
        beforeEach(function() {
          module(function($provide) {

           // creates a spy function
             var spyObj = jasmine.createSpy('$firebaseAuth').and.returnValue(expectedValue);

           // replace the $firebaseAuth method with a mock
             $provide.value('$firebaseAuth', spyObj);

          });
        });

        it('returns a $firebaseAuth object', inject(function(Auth) {
            expect(Auth).toBe(expectedValue);
        }));
    });

    describe('Messages service', function() {
        var expectedArray = {};
        var fbArray;
        beforeEach(function() {
            module(function($provide) {
                var spyArray = jasmine.createSpy('$firebaseArray').and.returnValue(expectedArray);
                $provide.value('$firebaseArray', spyArray);
            });
            console.log(expectedArray);
        });

        it('returns an instance of $firebaseArray', inject(function(Messages) {
            expect(Messages).toBe(expectedArray);
        }));
    });
});




