db.people.mapReduce(
function () {
    for (i = 0; i < this.credit.length; i++) {
        emit(this.credit[i].currency, { qty: 1, balance: +this.credit[i].balance });
    }
},
function (key, objVals) {
    tmp = { qty: 0, balance: 0 };

    for (i = 0; i < objVals.length; i++) {
        tmp.qty += objVals[i].qty;
        tmp.balance += objVals[i].balance;
    }

    tmp.balance = Math.round(tmp.balance * 100) / 100;
    tmp.avarage = Math.round((tmp.balance / tmp.qty) * 100) / 100;

    return tmp
},
{ query: { sex: "Female", nationality: "Poland" },
out: "fundsMR" })

printjson(
  db.fundsMR.find()
  .toArray()
)
