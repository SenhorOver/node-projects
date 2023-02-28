
const lstProductRemove = {
    btnRemove: document.querySelectorAll('.lstARemove'),

    init(){
        this.bindEvents()
    }, 

    bindEvents(){
        this.btnRemove.forEach(vl => {
            vl.onclick = this.Events.confirmRemove.bind(this)
        })
    },

    Events: {
        confirmRemove(e){
            e.preventDefault()
            const confirm = e.target.nextElementSibling
            confirm.classList.remove('none')
            confirm.addEventListener('click', event => {
                const el = event.target
                if(el.classList.contains('lstNo')){
                    confirm.classList.add('none')
                }
            })
        }
    }
}


export {lstProductRemove}