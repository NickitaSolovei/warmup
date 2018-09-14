module.exports = function warmup(temperature) {
  // your implementation here
  //из шкалы Цельсия в шкалу Фаренгейта нужно умножить исходное число на 9/5 и прибавить 32. 
  
  var tempF = temperature * 9 / 5 + 32;
  return tempF;
};
