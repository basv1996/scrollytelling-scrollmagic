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


    // section 2

    let timeline2 = new TimelineMax()
    timeline2.to('.top .image-container', 4, {
        height: 0
        // in de css staat de height op 100% en hier verander ik de hoogte naar 0%
    })

    let Scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
        offset: '100' // de animatie start als de eerste sectie 100px van de top van het scherm af zit
    })
    .setTween(timeline2) // voeg de timeline variabele toe als 
    .setPin('.second-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
    .addTo(controller)

    // Section 3

       let timeline3 = new TimelineMax()
       timeline3.to('.section_3_01', 4, {
           y: -250,
           ease: Power3.easeInOut
       })
       .to('.section_3_02', 4, {
        y: -200,
        ease: Power3.easeInOut
        }, '-=4')
        .to('.section_3_03', 4, {
        y: -100,
        ease: Power3.easeInOut
        }, '-=4')
        .to('.section_3_04', 4, {
        y: 0,
        ease: Power3.easeInOut
        }, '-=4')
        .to('.section_3_05', 4, {
        y: 150,
        ease: Power3.easeInOut
        }, '-=4')
        .to('.section_3_06', 4, {
        y: 250,
        ease: Power3.easeInOut
        }, '-=4')
   
       let Scene3 = new ScrollMagic.Scene({
           triggerElement: '.third-section',
           duration: '100%',
           triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
           offset: '0' // de animatie start als de eerste sectie 200px van de top van het scherm af zit
       })
       .setTween(timeline3) // voeg de timeline variabele toe als 
       .setPin('.third-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
       .addTo(controller)

       // section 4

    let timeline4 = new TimelineMax()
    timeline4.to('.section_4_01', 4, {
        autoAlpha: 0
    })
    .from('.section_4_02', 4, {
        autoAlpha: 0
    }, '-=4')
    .from('.section_4_03', 4, {
        autoAlpha: 0
    })
    .from('.section_4_04', 4, {
        autoAlpha: 0
    })

    let Scene4 = new ScrollMagic.Scene({
        triggerElement: '.forth-section',
        duration: '100%',
        triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
        offset: '100' // de animatie start als de eerste sectie 100px van de top van het scherm af zit
    })
    .setTween(timeline4) // voeg de timeline variabele toe als 
    .setPin('.forth-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
    .addTo(controller)

})