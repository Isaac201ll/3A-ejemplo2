let contFechas = document.querySelector("#contFechas")
let btnCrear = document.querySelector("#btnCrear")

btnCrear.addEventListener('clik', function(){
    let numClases =Number(document.querySelector("#numClases").value)
    for (let i=0; i<numClases; i++){
        contFechas.innerHTML += `
                                <label for="clases" class="asistencia">
                                    <span>clase ${i+1}</span>
                                    <input type="checkbox" name="fechas" id="clases ${i+1}">
                                </label>`
    }
})