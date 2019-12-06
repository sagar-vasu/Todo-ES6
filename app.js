/*******************     Date Code       *****************/


let days = [`Sunday`, `Monday`, `Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,];
let month = [`January`, `Feburuary`, `March`,`April`,`May`,`June`,`July`,`August`,`September`,`Octomber`,`November`,`December`];

let today = new Date().getMonth()
let date = new Date().getDay();
let show = document.getElementById(`date`).innerHTML = `${days[date]} ${new Date().getDate()} ${  month[today]} ${ new Date().getFullYear()}`


/*******************     Function to Add Values      *****************/

let add = () =>{
    if( document.getElementById(`text`).value.length === 0){
        alert(`You must Have to Enter Something`)
    }
    else{
    let text = document.getElementById(`text`).value;
    let data = localStorage.getItem(`values`);
    if(data === null){
        data = [];
    }
    else{
        data = JSON.parse(data)
    }
    data.push(text);
    localStorage.setItem(`values`,JSON.stringify(data))

    
    
    let box = document.getElementById(`list`);
    let ul = document.createElement(`ul`)
    ul.setAttribute(`id`, text)
    let li = document.createElement(`li`);
    let li_text = document.createTextNode(text)
    li.appendChild(li_text);
    ul.appendChild(li);
    box.appendChild(ul);



    let button = document.createElement(`button`);
    button.setAttribute(`class`, `button button5`);
    button.setAttribute(`value`, `Edit`)
    let btn_text = document.createTextNode(`Edit`)
    button.appendChild(btn_text) 
    ul.appendChild(button);

    button.addEventListener('click', function () {
        let edit = prompt(`enter value`)
        if(edit === ``){
            alert(`fill value`);
        }
        else{
        let rename = localStorage.getItem(`values`);
        rename = JSON.parse(rename)
        li.innerText = edit;
        for(let i =0; i<rename.length; i++){
            if(rename[i] === this.parentNode.id){
                rename.splice(i,1,edit)
                button.parentNode.setAttribute(`id`,edit)
               localStorage.setItem(`values`,JSON.stringify(rename))
            }

    }
    }
        
    })


    

    let button1 = document.createElement(`button`);
    button1.setAttribute(`class`, `button button3`);
    button1.setAttribute(`value`, `Delete`)
    let btn_text1 = document.createTextNode(`Delete`)
    button1.appendChild(btn_text1)
    ul.appendChild(button1);


    button1.addEventListener(`click`, function () { 
        button1.parentNode.remove()
        console.log(button1.parentNode)
        let  cut = localStorage.getItem(`values`);
        cut = JSON.parse(cut);
        for(let j =0; j<cut.length; j++){
            if(cut[j] === this.parentNode.id){
                cut.splice(j,1);
            }
        }
        localStorage.setItem(`values`,JSON.stringify(cut))
    })
  
    text = document.getElementById(`text`).value = ``;
}}

let data_back = localStorage.getItem(`values`);
data_back = JSON.parse(data_back);
for(let i = 0;i<data_back.length; i++){
    let box = document.getElementById(`list`);
    let ul = document.createElement(`ul`)
    ul.setAttribute(`id`, data_back[i])
    let li = document.createElement(`li`);
    let li_text = document.createTextNode(data_back[i])
    li.appendChild(li_text);
    ul.appendChild(li);
    box.appendChild(ul);



    let button = document.createElement(`button`);
    button.setAttribute(`class`, `button button5`);

    button.setAttribute(`value`, `Edit`)
    let btn_text = document.createTextNode(`Edit`)
    button.appendChild(btn_text) 
    ul.appendChild(button);

    button.addEventListener('click', function () {
        let edit = prompt(`enter value`)
        if(edit === ``){
            alert(`fill value`);
        }
        else{
        let rename = localStorage.getItem(`values`);
        rename = JSON.parse(rename)
        li.innerText = edit;
        for(let i =0; i<rename.length; i++){
            if(rename[i] === this.parentNode.id){
                rename.splice(i,1,edit)
                button.parentNode.setAttribute(`id`,edit)
               localStorage.setItem(`values`,JSON.stringify(rename))
            }

    }
    }
        
    })

    

    let button1 = document.createElement(`button`);
    button1.setAttribute(`class`, `button button3`);

    button1.setAttribute(`value`, `Delete`)
    let btn_text1 = document.createTextNode(`Delete`)
    button1.appendChild(btn_text1)
    ul.appendChild(button1);


    button1.addEventListener(`click`, function () { 
        button1.parentNode.remove()
        console.log(button1.parentNode)
        let  cut = localStorage.getItem(`values`);
        cut = JSON.parse(cut);
        for(let j =0; j<cut.length; j++){
            if(cut[j] === this.parentNode.id){
                cut.splice(j,1);
            }
        }
        localStorage.setItem(`values`,JSON.stringify(cut))
    })
  

    text = document.getElementById(`text`).value = ``;

}
