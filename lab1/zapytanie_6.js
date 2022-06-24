db.people.insertOne(
{
	"sex" : "Male",
	"first_name" : "Max",
	"last_name" : "Jedrzejewski",
	"job" : "QA tester",
	"email" : "max.jed9@gmail.com",
	"location" : {
		"city" : "Gdansk",
		"address" : {
			"streetname" : "Sezamkowa",
			"streetnumber" : "3"
		}
	},
	"description" : "asd",
	"height" : "187.00",
	"weight" : "85.0",
	"birth_date" : "1998-03-14T07:00:00Z",
	"nationality" : "Poland",
	"credit" : [
		{
			"type" : "switch",
			"number" : "99999999999997",
			"currency" : "PLN",
			"balance" : "999999.99"
		}
	]
}
)
