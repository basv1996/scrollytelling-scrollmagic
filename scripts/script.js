document.addEventListener('DOMContentLoaded', () => {
   
    let controller = new ScrollMagic.Controller()

    let timeline = new TimelineMax()
    timeline 
    .from('.section_1_01', 4, {
        y: -100,
        x: -150,
        ease: Power3.easeInOut
})

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