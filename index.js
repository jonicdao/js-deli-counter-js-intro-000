var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return ('Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.')
} 

function nowServing(katzDeliLine) {
  let i = 0
  if (katzDeliLine.length > 0) {
    return 'Currently serving ' + katzDeliLine[i] + '.'
    katzDeliLine.shift()
    i++
  }
  else
  return "There is nobody waiting to be served!"
}