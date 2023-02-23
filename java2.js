const container2 = document.querySelector('.container2')
const btn = document.querySelector('.emoji')
const textarea = document.querySelectorAll('textarea')


emoji.addEventListener('click',(e) => {

        if (e.target.className.includes('emoji'))
            return;

        textarea.classlist.add('textarea--active');
    })
container2.addEventListener('mouseleave',()=> {

    textarea.classList.remove('textarea--active');
    
    })
