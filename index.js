const hoja=document.querySelector(".cont")
const cantCuadros= document.querySelector("#input")
const generar= document.querySelector("#boton")
const color= document.getElementById('color')

cantCuadros.onchange=(e)=>{
    document.getElementById('cant_pix').textContent=`${e.target.value} x ${e.target.value}`
}

generar.addEventListener("click",function(){
    let cant=cantCuadros.value
    let total= cant*cant
    let listaPixel=[]
    let cont=0
    while(cont<total){
        var pix= document.createElement("div")
        pix.className="pixel"
        pix.setAttribute("style"," background-color: white;")
        listaPixel.push(pix)
        cont++
    }
    return efect(cant,listaPixel)
    
})
function efect(cant,listaPixel){
    for(var i=0;i<listaPixel.length;i++){
        listaPixel[i].onmouseover=function(){
            this["style"].backgroundColor=`${color.value}`
        }
        hoja.appendChild(listaPixel[i])
    }
    return grid(cant)
    
}

function grid(pixels){
    hoja.style.gridTemplateColumns=`repeat(${pixels},1fr)`
    hoja.style.gridTemplateRows=`repeat(${pixels}, 1fr)`
    
}






