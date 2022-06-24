db.people.mapReduce(
function () {
    var bmi = Math.round((+this.weight * 1000000 / (Math.pow(this.height,2))) ) / 100

    emit(this.nationality, { qty: 1, minBMI: bmi, maxBMI: bmi, avgBMI: bmi });
}
,
function (nationality, objVals) {
    tmp = { qty: 0, minBMI: 0, maxBMI: 0, avgBMI: 0 }
    for (var idx = 0; idx < objVals.length; idx++) {
        tmp.qty += objVals[idx].qty;
         if (tmp.minBMI == 0) {
            tmp.minBMI = objVals[idx].minBMI
        }
        tmp.minBMI = Math.min(tmp.minBMI, objVals[idx].minBMI);
        tmp.maxBMI = Math.max(tmp.maxBMI, objVals[idx].maxBMI);
        tmp.avgBMI += objVals[idx].avgBMI;
    }

    tmp.avgBMI = Math.round((tmp.avgBMI / tmp.qty) * 100) / 100;

    return tmp;
}
,
{ out: "BMIMR"})
printjson(db.BMIMR.find().toArray())
