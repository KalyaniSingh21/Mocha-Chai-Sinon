var expect = chai.expect;

describe("bitwiseOffice", function () {
	var bitwiseoffice = new bitwiseOffice();
	var sandbox;

	beforeEach(function () {

		sandbox = sinon.sandbox.create();
		sandbox.stub(window.console,"log");
		sandbox.stub(window.console,"error");
	})

	afterEach(function(){

		sandbox.restore();
	})


	describe("constructor", function () {

		it( 'should check deep equality of objects and arrays', function() {
			var o1 = { b:5, c: { d:6, e: [1,2,3] } };
			var o2 = { c: { d:6, e: [1,2,3] }, b:5 };
			expect( o1 ).to.deep.equal( o2 );
		} );

		it( 'should check deep equality of objects and arrays', function() {
			var o1 = { b:5, c: { d:6, e: [1,2,3] } };
			var o2 = { c: { d:6, e: [1,2,3] }, b:5 };
			expect( o1 ).to.eql( o2 );
		} );

		it( 'should check deep equality of objects and arrays', function() {
			var o1 = { b:5, c: { d:6, e: [1,2,3] } };
			var o2 = { c: { d:6, e: [1,2,3] }, b:5 };
			expect( o1 ).to.not.equal( o2 );
		} );

		it("should have a name passed in function", function () {
			var bitwiseoffice = new bitwiseOffice("Montage");
			expect(bitwiseoffice.name).to.equal("Montage");
		});

		it("should have a default name if undefined", function () {
			expect(bitwiseoffice.name).to.equal("Edit LLC");
		});

		it("should have an employee count", function () {
			expect(bitwiseoffice.employeeCount).to.equal(30);
		});

		describe("employee info properties", function(){

			it("should have employee info object", function () {
				expect(bitwiseoffice.employeeInfo).to.be.an('object');
			});

			it("#employee name throws error for empty name", function(){

					bitwiseoffice.employeeInfo.employeeName();

					sinon.assert.calledOnce(console.error);
					sinon.assert.notCalled(console.log);
					sinon.assert.calledWithExactly(console.error, "Unknown Employee");

			});

			it("#employee name passes for valid name", function() {

				bitwiseoffice.employeeInfo.employeeName("Kalyani Singh");
				sinon.assert.calledOnce(console.log);
				sinon.assert.notCalled(console.error);
				sinon.assert.calledWithExactly(console.log,"Kalyani Singh");
			});
			/*  works with mocha and return statements

			it("#employee name throws error for empty name", function () {
				expect(function() {
					bitwiseoffice.employeeInfo.employeeName();
				}).to.throw(Error);

			});

			it("#employee name passes for valid name", function(){
				var employeename = bitwiseoffice.employeeInfo.employeeName("Kalyani Singh");
				expect(employeename).to.equal("Kalyani Singh");
			});*/
		})
	});


	describe("bitwise prototype", function () {
		var empage = new bitwiseOffice().employeeAge;

		/*before(function(){
			expect(empage).to.be.a('number');
		});*/

		it("should have employee age", function () {
			expect(empage).to.equal(32).and.to.be.a('number');

			/*  nested tests do not work

			it("should equal to 30", function () {
				expect(empage).to.equal(30);
			})*/

		})

		it("should flash employee age after 2 seconds", function(done){
			new bitwiseOffice().showemployeeAge(function (err, showempage) {
				expect(showempage).to.equal(32);
				done();
			})
		})
	})
});