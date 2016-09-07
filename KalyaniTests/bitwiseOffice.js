/**
 * Created by Kalyani on 8/29/2016.
 */

(function(exports) {
	"use strict";

	function bitwiseOffice(name) {
		this.name = name || "Edit LLC";
		this.employeeCount = 30;
		this.employeeInfo = {
			employeeName: function (employeename) {
				if (!employeename) {
					//throw new Error("Unknown employee");
					return console.error("Unknown Employee")
				}
				//return employeename;
				console.log(employeename);
			}
		};
	}

	exports.bitwiseOffice = bitwiseOffice;

	bitwiseOffice.prototype = {
		employeeAge: 32,
		showemployeeAge : function(cb){
			setTimeout(function (self) {
				try {
					cb(null, self.employeeAge);
				}
				catch(err) {
					cb(err);
				}
			}
		, 1997, this)}
	}

})(this);


