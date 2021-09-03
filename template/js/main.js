(() => {

    let $form = document.querySelector('#footer form')
    let $input = document.querySelector('#footer form input')

    $input.addEventListener('keyup', (e) => {
        $form.querySelectorAll('.error-text').forEach(e => e.remove())

        let arrData = $form.querySelectorAll('[name]')
        let data = {}
        arrData.forEach(e => {
            data[e.name] = e.value
        })

        let errorObject = {}

        if (!data.email) {
            errorObject.email = 'Vui lòng điền Email'
        }

        for (let i in errorObject) {
            let errorNode = document.createElement('span')
            errorNode.classList.add('error-text')
            errorNode.innerHTML = errorObject[i]
            let input = $form.querySelector(`[name="${i}"]`)
            input.parentNode.insertBefore(errorNode, input.nextSibling)
        }


        if (Object.keys(errorObject).length > 0) {
            e.preventDefault()
        }

    })


})()
const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});




let $header = document.querySelector('#header')
let $banner = document.querySelector('.banner')
let $menus = document.querySelectorAll('#header nav a')

let scrollTopCondition = $banner.offsetHeight - $header.offsetHeight

let $activeMenuBrder = document.querySelector('#header .active-menu')

let $anchors = []

$menus.forEach(e => {
    $anchors.push(document.querySelector(e.getAttribute('href')))
})

scroller.on('scroll', function (position) {
    let scrollTop = position.scroll.y

    if (scrollTop > scrollTopCondition) {
        $header.classList.add('fixed')
    } else {
        $header.classList.remove('fixed')
    }


    $anchors.forEach(e => {
        if (scrollTop >= e.offsetTop) {
            let menu = document.querySelector(`#header [href="#${e.id}"]`)
            $activeMenuBrder.style.width = `${menu.offsetWidth - 30}px`
            $activeMenuBrder.style.left = `${menu.parentNode.offsetLeft + 15}px`
        }
    })


})
// document.body.addEventListener('click', function() {
//     console.log('body click')
// })

$menus.forEach(e => {
    e.addEventListener('click', function (event) {
        event.preventDefault()
        // event.stopPropagation()

        let id = this.getAttribute('href')

        let anchor = document.querySelector(id)

        scroller.scrollTo(anchor.offsetTop);

    })
})

let contact = document.querySelector('#contact')

let $button = contact.querySelector('form button')
let $form = contact.querySelector('form')

$button.addEventListener('click', (e) => {
    $form.querySelectorAll('.erorr-text').forEach(e => e.remove())


    let arrData = $form.querySelectorAll('[name]')
    let data = {}
    arrData.forEach(e => {
        data[e.name] = e.value
    })


    let errorObject = {}

    if (!data.name) {
        errorObject.name = 'Vui lòng điền họ và tên'
    }
    if (!data.email) {
        errorObject.email = 'Vui lòng điền Email'
    }
    if (!data.subject) {
        errorObject.subject = 'Vui lòng điền Subject'
    }
    if (!data.content) {
        errorObject.content = 'Vui lòng điền Nội dung'
    }

    for (let i in errorObject) {
        let errorNode = document.createElement('p')
        errorNode.classList.add('erorr-text')
        errorNode.innerHTML = errorObject[i]
        let input = $form.querySelector(`[name="${i}"]`)
        input.parentNode.insertBefore(errorNode, input.nextSibling)
    }


    if (Object.keys(errorObject).length > 0) {
        e.preventDefault()
    }

})



let section6CoverImgs = document.querySelectorAll('.section6 .post .cover img')


let elem = document.querySelector('.main-carousel');
let flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: true,
    wrapAround: true,
    on: {
        change(index) {
            document.querySelector('.section6 .post .cover img.active').classList.remove('active')
            section6CoverImgs[index].classList.add('active')
        }
    }
});

// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity( '.main-carousel', {
//   // options
// });


