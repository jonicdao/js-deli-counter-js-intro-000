var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return ('Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.')
} 

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nowServing = katzDeliLine[0]
    katzDeliLine.shift()
    return 'Currently serving ' + nowServing + '.'
  }
  else {
  return "There is nobody waiting to be served!"
  }
}

 function currentLine(katzDeliLine) {
  while (katzDeliLine.length > 0) {
    var array = []
    for (var i = 0; i < katzDeliLine.length; i++)
    array.push(` ${i+1}. ${line[i]}`)
   return "The Line is currently: " + array
  }
    return "The line is currently empty."
 }

