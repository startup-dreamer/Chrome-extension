let URLs = [];

function inputURL() {
    const value = document.getElementById('input-el').value;
    if(value != ''){
        URLs.push(value);
    };
    console.log(URLs);
    document.getElementById('input-el').value = null;
    render();

}

function Delet(){
    URLs.pop();
    render();
}

function render(){
    const render = document.getElementById("render");
    render.innerHTML = null;
    let listItems="";
    for(let i = URLs.length-1;i>=0;i--){
        listItems += `<li class="p-3 mb-2 bg-light text-dark" ><a href='${URLs[i]}' target = '_blank' class="text-info" >${URLs[i]}</a></li>`;
    }
    render.innerHTML = listItems;
}

function Tab_url(){

}

