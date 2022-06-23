simplyCountdown('#cuenta', {
  year: 2022, // required
  month: 6, // required
  day: 23, // required
  hours: 15, // Default is 0 [0-23] integer
  minutes: 18, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: ' Dia ', plural: ' Dias ' },
      hours: { singular: ' Hora ', plural: ' Horas ' },
      minutes: { singular: ' Minuto ', plural: ' Minutos ' },
      seconds: { singular: ' Segundo ', plural: ' Segundos ' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  // UTC = Tiempo Universal Coordinado
  //para obtener el tiempo universal coordenado (cosas como estrenos mundiales)
  //https://dateful.com/time-zone-converter
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() {
    // alert('ya acabo! :D ');
    document.getElementById('portada').classList.add('oculta');
    return;
  }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false //empieza a contar a la inversa (cuanto a pasado desde la fecha de inicio)
});

// let myElement = document.querySelector('.my-countdown');
//     simplyCountdown(myElement, { /* options */ });

// let multipleElements = document.querySelectorAll('.my-countdown');
// simplyCountdown(multipleElements, { /* options */ });