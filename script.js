function addTask() {
    const listEl = document.createElement('li')
    const inputValue = document.getElementById('myInput').value
    const text = document.createTextNode(inputValue)
    listEl.appendChild(text)
    document.getElementById('myUL').appendChild(listEl)
    document.getElementById('myInput').value=''

    const span = document.createElement('SPAN')
    const closeText = document.createTextNode('\u00d7')
    span.className = 'close'
    span.appendChild(closeText)
    listEl.appendChild(span)
    
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function (){
            const div = this.parentElement
            div.style.display = 'none'
        }
    }
}


const allListItems = document.getElementsByTagName('li')

for(let i = 0; i < allListItems.length; i++) {
    const span = document.createElement('SPAN')
    const text = document.createTextNode('\u00d7')
    span.className = 'close'
    span.appendChild(text)
    allListItems[i].appendChild(span)
}

const close = document.getElementsByClassName('close')


for (let i = 0; i < close.length; i++) {
    close[i].onclick = function (){
        const div = this.parentElement
        div.style.display = 'none'
    }
}

const list = document.querySelector("ul")

list.addEventListener("click", 
    function(event) {
        if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked")
    }
},
    false
)
