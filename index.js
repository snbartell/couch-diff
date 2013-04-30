var request = require('request').defaults({json: true})
var takeDifference = require('interset').difference

var db1 = process.argv[2]
var db2 = process.argv[3]

if (!db1 || !db2)
  return console.error('i need two database paths to take an intersection')

request.get(db1+'/_all_docs', function (er, res, a) {
  request.get(db2+'/_all_docs', function (er, res, b) {

    var diff2 = takeDifference(
          b.rows.map(function(row){return row.id})
        , a.rows.map(function(row){return row.id})
      )

    console.log('difference2')
    console.log(diff2)

  })
})