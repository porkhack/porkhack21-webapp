module.exports = {
	"day": "2021-03-24",
	"timestamp": 1616614073,
	"address": "300 Main Street, Springfield, IL, 12345",
	"latlon": {
		"lat": 40,
		"lon": -85
	},
	"premiseid": "abc123",
	"location": {
		"name": "Bob's Farm"
	},
	"head": {
		"value": 59,
		"units": "count"
	},
	"weight": {
		"value": 16874,
		"units": "lbs"
	},
	"pac": {
		"pacid": "abdfuihjf289yhf23",
		"result": "valid",
		"signatures": [
			"dsfjlsidjf.jfsldifjwoeifwejf.owiejfwoeifj"
		]
	},
	"certification": {
		"certtype": "PQA-PLUS",
		"certificationid": "23345345345",
		"expiration": "2022-01-22"
	},
	"status": "scheduled",
	"shipdate": "2021-03-31",
	"scheduled": {
		"shipfromlocation": "abc123"
	},
	"enroute": {
		"head": {
			"value": 59,
			"units": "count"
		},
		"weight": {
			"value": 16874,
			"units": "lbs"
		},
		"departuretime": 1616614073,
		"arrivaltime": 1626614073,
		"locations": {
			"111": {
				"lat": 40.1,
				"lon": -85.1,
				"time": 1616624073
			},
			"222": {
				"lat": 40.2,
				"lon": -85.2,
				"time": 1616634073
			}
		}
	},
	"arrived": {
		"arrivaltime": 1617614073,
		"head": {
			"value": 59,
			"units": "count"
		},
		"weight": {
			"value": 16720,
			"units": "lbs"
		}
	},
	"farmer": {
		"name": "Bob Smith",
		"certifications": {
			"certtype": "PQA-PLUS",
			"certificationid": "23345345345",
			"expiration": "2022-01-22"
		},
		"processorid": "Smithfield Packaged Meats",
		"haulerid": "haul12345"
	},
	"hauler": {
		"name": "Big Mack Trucking",
		"certifications": {
			"certtype": "TQA",
			"certificationid": "278945345",
			"expiration": "2021-12-22"
		},
		"farmerid": "farmer123555",
		"processorid": "proc99999"
	},
	"processor": {
		"name": "Smithfield Packaged Meats",
		"certifications": {
			"certtype": "PQA",
			"certificationid": "7884345",
			"expiration": "2022-03-02"
		},
		"farmerid": "f97654",
		"haulerid": "h483092"
	}
}
