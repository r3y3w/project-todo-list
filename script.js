function addTask() {
    // Constant list element or listEL will store a new 'li' element created by the createElement()
    const listEl = document.createElement('li')
   
    // Constant inputValve will store input value entered by the usere in the index.HTML file input tag element.
    const inputValue = document.getElementById('myInput').value
   
    // Constant text will store the value stored in inputValue
    const text = document.createTextNode(inputValue)

    // Line Below: The function appendChild, appends a child element. In example <li>  to the parent element  <ul>
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
            
            div.style.display = 'none'  // will do the effect of deleting the completed task.
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

const list = document.querySelector("ul") // Query Selector returns matched element <ul>

/* 
addEventListener() will be called  whenever a click over an LI happnes.
list.addEventListener() has three parameters. param 1 = click, param 2 = anonmymous function, param 3 = false
*/
list.addEventListener("click",   
    function(event) {
        if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked")  // Will Create check mark effect
    }
},
    false
)
