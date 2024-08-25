const myObserver = new IntersectionObserver((entries) => {
entries.forEach((entry)=>
{
    if(entry.isIntersecting){
        entry.target.classList.add('paragrafo_show')
    }else{
        // entry.target.classList.remove('paragrafo_show')
    }
}
)
    // console.log(entries)
})
const paragrafos = document.querySelectorAll('.paragrafo_hidden')

paragrafos.forEach((element) => myObserver.observe(element) )

