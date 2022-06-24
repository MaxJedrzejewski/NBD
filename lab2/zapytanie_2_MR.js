db.people.mapReduce(
  function () {
    if (!this.credit) return;
    this.credit.forEach(function (credit) {
      emit(credit.currency, parseFloat(credit.balance) || 0);
    });
  },
  function (key, wartosci) {
    return Array.sum(wartosci)
  }, {
    out: "remainingFunds"
  }
)

printjson(db.remainingFunds.find().toArray())
