db.people.mapReduce(
function () {emit(this.sex, {count: 1, height: parseFloat(this.height), weight: parseFloat(this.weight)});},
function (key, values) {
  var tmp = {count: 0, height: 0, weight: 0};

  values.forEach(function (value) {
    tmp.count += 1
    tmp.height += value.height;
    tmp.weight += value.weight;
  });

  tmp.height = tmp.height / tmp.count;
  tmp.weight = tmp.weight / tmp.count;

  return tmp;
}, {
  out: 'newCollection'
})
