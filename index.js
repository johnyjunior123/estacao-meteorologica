let temperatura;
let umidade;
const host = "192.168.108.48:3333";       // Servidor HTTP (pode ser um IP ou domínio)
const tagUmid = document.getElementById("umidade")
const tagTemp = document.getElementById("temperatura")

function buscarDadosSensor(){
    fetch(`http://${host}`)
    .then(res => {
       return res.json()
    })
    .then(json => {
        temperatura = json.temperatura
        umidade = json.umidade
        tagTemp.textContent = `${temperatura} °C`
        tagUmid.textContent = `${umidade} %`
    }).catch(error => {
        console.log(error.message)
    })
}

setInterval(buscarDadosSensor, 1000)