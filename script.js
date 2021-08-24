// const slideText = document.querySelector('.right')

// window.addEventListener('scroll', () => {

//     const {scrollTop, clientHeight} = document.documentElement

//     console.log(scrollTop, clientHeight);

//     const topElementToTopViewport = slideText.getBoundingClientRect().top;

//     if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.50){
//         slideText.classList.add('active')
//     }

// })

const spanContainers = document.querySelectorAll('.item div')
console.log(spanContainers);

spanContainers.forEach(item => {
    const letters = item.children[0].textContent.split('')
    item.innerHTML = ''

    letters.forEach((el, index) => {
        item.innerHTML += `<span style='transition-delay: ${0.07 * index}s'>${el}</span>`
    })
})

const menuToggle = document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
})