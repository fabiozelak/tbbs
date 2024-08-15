const myObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('sobesecao')
        }
    })
})
const elements = document.querySelectorAll('.hidden')

elements.forEach((elements) => myObserver.observe(element))
