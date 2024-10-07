const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function vizualizarInformacaoGlobais(){
    
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
const pessoasNoMundo = (dados.totaol_pessoas_mundo / 1e9 ) 
const totalPessoasConectadas =(dados.total_pessoas_conectadas / 1e9 )
const horas =parseInt(daods.tempo_medio)
const minutos = Marth.round((dados.tempo_medio - horas) *100)


 const paragrafo = document.createElement('p')   
 paragrafo.classList.add('graficos-container__texto')   
 
 paragrafo.innerHTML = `Você sabia que o mundo tem 
<apam>${pessoasNoMundo} </span> de pessoas aproximadamente
<spam>${total_pessoas_conectadas} </span> estão conectadas em alguma rede social e passam em media ${dados.tempo_medio}
<span> ${horas} <span> ${minutos}<span> horas conectadas 

 

const container = document.getElementById("graficos-container")
container.appendChild(paragrafo)

}

vizualizarInformacaoGlobais();
