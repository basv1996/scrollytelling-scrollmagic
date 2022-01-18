document.addEventListener('DOMContentLoaded', () => {
   
    let controller = new ScrollMagic.Controller()

    let timeline = new TimelineMax()
    timeline 
    .from('.section_1_01', 4, {
        y: -100,
        x: -150,
        ease: Power3.easeInOut
    })
    .from('.section_1_02', 4, {
        y: -150,
        x: -250,
        ease: Power3.easeInOut
    }, '-=4') 
    // heb -=4 toegevoegd als offset waarde, 
    // dit zorgt ervoor dat deze animatie 4 seconde eerder begint 
    // dan de .from animatie die ervoor is gestopt
    .from('.section_1_03', 4, {
        y: -80,
        x: -100,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_04', 4, {
        y: -100,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_05', 4, {
        y: -80,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_06', 4, {
        y: -100,
        x: -350,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_07', 4, {
        y: -50,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_08', 4, {
        y: 50,
        x: -350,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_09', 4, {
        y: 100,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')

    let Scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%',
        triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
        offset: '300' // de animatie start als de eerste sectie 300px van de top van het scherm af zit
    })
    .setTween(timeline) // voeg de timeline variabele toe als 
    .setPin('.first-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
    .addTo(controller)
})