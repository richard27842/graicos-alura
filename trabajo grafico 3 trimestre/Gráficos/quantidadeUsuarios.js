import { getCSS, tickConfig } from "./common.js "

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes= ['Brasil','Irã','Alemanha', 'EUA', 'Holanda', 'França', 'Reino Unido', 'Itália', 'Espanha', 'Bélgica']
    const quantidadeUsuarios = ['5.09','8.05','9.1','24.08','31.58','39.28','47.62','50.3','56.67','75.13']
    const nomeDasRedes1 = ['Brasil','Uruguai','chile','Autrália','Alemanha','França','Países Baixos','EUA','Irã','Noruega','Nova Zelândia']
    const quantidadeUsuarios1 = ['6.45','6.49','6.53','6.57','6.67','6.71','6.8','6.88','7.3','7.8','8.44']
    const nomeDasRedes2 = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016']
    const quantidadeUsuarios2 = ['45,133','62,494','71,598','86,072','100,648','119,354','131,368','138,366','129,301','147,096']

   

    
const data = [
        {
    
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--cor-barra')
            }
        }
    ]
    const data1 = [
        {
    
            x: nomeDasRedes1,
            y: quantidadeUsuarios1,
            type: 'bar',
            marker: {
                color: getCSS('--cor-barra')
            }
        }
    ]
    const data2 = [
        {
    
            x: nomeDasRedes2,
            y: quantidadeUsuarios2,
            type: 'bar',
            marker: {
                color: getCSS('--cor-barra')
            }
        }
    ]



    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'TAXA DE MORTE POR COVID ',
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
       
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'A CADA 100K HABITANTES',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: '(%)',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }

        }

    }

    const layout1 = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Campeões de Ansiedade',
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'porcentagem de pessoas ansiosas em total da população',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: '(%)',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }

        }

    }
    const layout2 = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Depressão por idade',
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Anos de Depressão',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: '(%)',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }

        }

    }







    const grafico = document.createElement('div')
    grafico.className - 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

    const grafico1 = document.createElement('div')
    grafico.className - 'grafico'
    document.getElementById('graficos-container1').appendChild(grafico1)
     Plotly.newPlot(grafico1, data1, layout1)

     const grafico2 = document.createElement('div')
     grafico.className - 'grafico'
     document.getElementById('graficos-container2').appendChild(grafico2)
      Plotly.newPlot(grafico2, data2, layout2)
    }

quantidadeUsuarios()