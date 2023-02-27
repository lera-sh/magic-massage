import '@/styles/index.scss'

const navLinks = document.querySelectorAll('.nav-link')
const questionArrow = document.querySelectorAll('.question-arrow')

navLinks.forEach(link => clickLink(link))
window.addEventListener('scroll', () => scroll())
questionArrow.forEach(item => openQuestion(item))

function clickLink(link) {
    link.addEventListener('click', event => {
        event.preventDefault()

        const targetId = link.getAttribute('href')
        const targetSection = document.querySelector(targetId)

        targetSection.scrollIntoView({ behavior: 'smooth' })
        navLinks.forEach(navLink => {
            navLink.classList.remove('active')
        })

        link.classList.add('active')
    });
}

function scroll() {
    const currentSectionId = [...document.querySelectorAll('section')].reverse()
        .find(section => section.getBoundingClientRect().y < 100).id;

    navLinks.forEach(navLink => {
        navLink.classList.remove('active')
    });

    const currentNavLink = document.querySelector(`.nav-link[href="#${currentSectionId}"]`)
    currentNavLink.classList.add('active')
}

function openQuestion(item) {
    item.addEventListener('click', () => {
        item.classList.toggle('rotated')

        const answer = item.parentNode.parentNode.querySelector('.answer-container')
        answer.classList.toggle('block')
    })
}