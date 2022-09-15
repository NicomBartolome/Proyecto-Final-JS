function producto(abono){
    fetch('js/abonos.json')
        .then(info => info.json())
        .then((data) => {
            const dato = data.find((S) => S.id == abono)           
            console.log('El abono que mejor se adapta a tus necesidades es el abono de ' + dato.id + ' Mb - $'+ dato.precio + ' Final por mes')

            let producto = document.createElement('div')
            producto.id = "tarjetas"
            producto.innerHTML = `<div id="productoE">
                                        <h3>Nuestra recomendacion</h3>
                                        <h2> ${dato.id} Mbps</h2>
                                        <h4> $ ${dato.precio} </h4>
                                    </div>`

            document.body.append(producto)
            

            for(let i = 0; i < data.length; i++){
                if(data[i].id == abono){
                }else{
                    let productoOp = document.createElement('div')
                    productoOp.className = "productoO"
                    /* let productoAdicional = document.createElement('div');
                    productoAdicional.className = "productoO" */
                    productoOp.innerHTML += `<h3>Otra opcion</h3>
                                            <h2> ${data[i].id} Mbps</h2>
                                            <h4> $ ${data[i].precio} </h4>`

                    producto.appendChild(productoOp)

                }
            }
        })
}

function calculador(){

    const datosCliente = {
        /* nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value, */
        computadoras: document.getElementById('pcs').value,
        tablets: document.getElementById('Tablets').value,
        telefonos: document.getElementById('Telefonos').value,
        tvs: document.getElementById('tv').value
    
    }

    ConsumoCTE = ((datosCliente.computadoras*3)+(datosCliente.tablets*2)+(datosCliente.telefonos*2)+(datosCliente.tvs*3))
    if(ConsumoCTE == 0 || ConsumoCTE <= 4){
        producto('4')        
    }else if(ConsumoCTE <= 6 && ConsumoCTE > 4){
        producto('6')
    }else if(ConsumoCTE <= 8 && ConsumoCTE > 6){
        producto('8')
    }else if(ConsumoCTE <= 10 && ConsumoCTE > 8){
        producto('10')
    }else if(ConsumoCTE > 10){
        producto('20')
    }else{
        console.log('No se puede calcular')
    }

}

let btnCalcular = document.getElementById('Calcular')
btnCalcular.addEventListener('click',calculador)