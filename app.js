const btn = document.getElementsByTagName('button')[0];
const ol = document.getElementsByTagName('ol')[0];
let li = document.getElementsByTagName('li')[0];
const inp = document.getElementsByTagName('input')[0];
btn.addEventListener("click", function add(){
    if(inp.value == ""){
        alert("hooson oruulj bolohgui")
        liEl.remove();
    }
    //createElement('p')--> shine tag uusgeh function
    let li = document.createElement('li');
    //appendChild() --> uusgesen tag-aa uur tag dotr oruulah function
    ol.appendChild(li);
    li.innerText = inp.value;
    inp.value = "";  
    let i = document.createElement('i');
    let b = document.createElement('i');
    li.appendChild(b);
    b.className = "bi bi-check-lg";
    b.style= "position: absolute; right: 100px;"
    li.appendChild(i);
    i.className = "bi bi-trash3-fill";
    i.style = "position: absolute; right: 70px;"
    saveData();
});

ol.addEventListener("click", function toDo(e){
    let olEl = e.target;
    let liEl = olEl.parentElement;
    console.log(liEl);
    // parentElement --> tag dotorh tag ruu handah
    if(olEl.className == "bi bi-trash3-fill"){
        liEl.remove();
        saveData();
    }
    if(olEl.className == "bi bi-check-lg"){
        let check = liEl.parentElement;
        liEl.classList.toggle('checked');
        saveData();
    }
})

//Local storage --> bidnii oruulsan datag web browserd hadagldag
// setItem --> datag hadgalana , getItem --> hadgalsan datagduudna , 
//clearItem,removeItem --> hadgalsan datag ustgana
/*  function saveData(){
        localStorage.setItem("name","Anand");
    }
    saveData();
    function getData(){
        let data =localStorage.getItem('name');
        console.log(data);
    }
    getData();*/
function saveData(){
    localStorage.setItem('toDo' , ol.innerHTML);
}

function getData(){
    ol.innerHTML = localStorage.getItem('toDo');
}
getData();