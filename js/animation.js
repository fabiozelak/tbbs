const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('sobe_secao')
        }
    })
})
const elements = document.querySelectorAll('.desce_secao')

elements.forEach((element) => myObserver.observe(element))
