const producto = (abono) => {
    setTimeout(() => {

        fetch('js/abonos.json')
            .then(info => info.json())
            .then((data) => {
                const dato = data.find((S) => S.id == abono)           

                let producto = document.createElement('div')
                producto.id = "tarjetas"
                producto.innerHTML = `<div id="productoE">
                                            <div class="recomendacion"><p>Te recomendamos</p></div>
                                            <h2> ${dato.id} Mbps</h2>
                                            <h2> $ ${dato.precio} </h2>
                                            <button class="boton-contratar" onclick="location.href='https://api.whatsapp.com/send/?phone=5493582448431&text=Hola!+estoy+interesado+en+su+servico+de+${dato.id}+Mb'">
                                            <img src="img/wpp5.png" id="wpp-boton"><p> CONTRATALO YA!</p></button>
                                        </div>`

                document.body.append(producto)
                
                let o = 0;

                for(let i = 0; i < data.length; i++){
                    if(data[i].id == abono){
                    }else{
                        if(0 < 2){
                            o++    
                        }

                        let productoOp = document.createElement('div')
                        productoOp.className = "productoO"
                        productoOp.style = `order:${o}`
                        productoOp.innerHTML += `<h2> ${data[i].id} Mbps</h2>
                                                <h2> $ ${data[i].precio} </h2>
                                                <button class="boton-contratar" onclick="location.href='https://api.whatsapp.com/send/?phone=5493582448431&text=Hola!+estoy+interesado+en+su+servico+de+${data[i].id}+Mb'">
                                                <img src="img/wpp5.png" id="wpp-boton"> CONTRATALO YA!</button>`

                        producto.appendChild(productoOp)
                    }
                }
            })
    }, 1750)
}

const calculador = () => {

    if(document.getElementById('tarjetas')){
        let ofertas = document.getElementById('tarjetas')
        ofertas.remove()        
    }

    Swal.fire({
        position: 'center',
        title: 'Encontramos el plan perfecto para vos!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1750
    })

    const datosCliente = {
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