


var arr = 'jan, newton'
var splitter = arr.split(' ')
console.log(splitter)

for(var i = 0; i < splitter.length; i++) {
    var emptyStr = ''
    emptyStr += splitter[i][0].toUpperCase() + splitter[i].slice(1)
    console.log(emptyStr)
}
