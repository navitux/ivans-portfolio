// imports
import Alpine from 'alpinejs'
import JParticles from 'jparticles'

// Alpinejs init
window.Alpine = Alpine
Alpine.start()

// particles animation
new JParticles.Particle('#bg-prt',{
    maxR: 2,
    maxSpeed: 0.5,
    minR: 2,
    minSpeed: 0.1,
    num: 0.08,
    range: 0,
    proximity:0.3,
})

//footer
let year = new Date().getFullYear()
document.getElementById('year').innerHTML += year