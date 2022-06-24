db.people.aggregate([
    {
        $group: {
            _id: "$nationality",
            avgBMI: {
                $avg: {
                    $multiply: [{
                        $divide:
                            [{ $toInt: { $toDecimal: "$weight" } },
                            { $pow: [{ $toInt: { $toDecimal: "$height" } }, 2] }]
                    }, 10000
                    ]
                }
            },
            maxBMI: {
                $max: {
                    $multiply: [{
                        $divide:
                            [{ $toInt: { $toDecimal: "$weight" } },
                            { $pow: [{ $toInt: { $toDecimal: "$height" } }, 2] }]
                    }, 10000
                    ]
                }
            },
            minBMI: {
                $min: {
                    $multiply: [{
                        $divide:
                            [{ $toInt: { $toDecimal: "$weight" } },
                            { $pow: [{ $toInt: { $toDecimal: "$height" } }, 2] }]
                    }, 10000
                    ]
                }
            }
        }
    },
    {
        $out: "BMI"
    }
])
printjson(db.BMI.find().toArray())
