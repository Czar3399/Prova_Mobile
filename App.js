import { Text, Image, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Carta from './src/components/Cartas';

{/*
export default function App() {
  return (
    <View style={styles.container}>
      <Teste texto= "Olá pessoal!"> 
        <Image source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }} style={styles.img}/>
      </Teste>
    </View>
  );
}

export default function App() {
  
  return (
    <View style={styles.container}>
      <Contador />
      <Contador />

    </View>
  );
}


export default function App() {
  
  let [loading, setLoading] = useState (false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, [])

  return (
    <View style={styles.container}>
      {loading === true ? <Contador/> : <Text>Carregando ...</Text>}
    </View>
  );
}
*/}

{/*
export default function App() {
    return (
    <View style={styles.container}>
      <Filme />
    </View>
  );
}
*/}

const listaCartas = [
  {
    titulo: "Dragao Azul",
    descricao: "Este lendário dragão é uma poderosa máquina de destruição. Praticamente invencível, muito poucos enfrentaram essa magnifica criatura e viveram para contar a história. \nAtaque : 3000\nDefesa : 2500",
    urlImagem: "https://yugiohblog.konami.com/br/wp-content/uploads/2018/10/CaosAzul.jpg"
  },
  {
    titulo: "Dark Ruler Ha Des",
    descricao: "Não pode ser Invocado por Invocação-Especial do Cemitério. Negue os efeitos dos monstros destruídos em batalhas com monstros do Tipo Demônio que você controla. \nAtaque : 2450\nDefesa : 1600",
    urlImagem: "https://pm1.narvii.com/6213/509bfd4e845b710a402361769f0ce4a86510701a_hq.jpg"
  },
  {
    titulo: "Mago negro",
    descricao: "O mago definitivo em termos de ataque e defesa.\n\n\nAtaque : 2500\nDefesa : 2100",
    urlImagem: "https://http2.mlstatic.com/D_NQ_NP_875202-MLB31568105126_072019-O.jpg"
  },
  {
    titulo: "Clayman, o HERÓI do Elemento",
    descricao: "Um HERÓI do Elemento com um corpo de argila construído para durar. Ele conserva os seus colegas HERÓIS do Elemento a todo o custo.\n\nAtaque : 800\nDefesa : 2000",
    urlImagem: "https://cdnx.jumpseller.com/deckscards/image/28260651/resize/1200/1200?1665112754"
  }
]


export default function App() {
    return (
    <View style={styles.container}>
      <Carta carta={listaCartas[0]}/>
      <Carta carta={listaCartas[1]}/>
      <Carta carta={listaCartas[2]}/>
      <Carta carta={listaCartas[3]}/>
    </View>
    );
  }
{/*

export default function App() {
  return (
  <View style={styles.container}>
    {listaFilmes.map(filme => <Filme filme={filme}/>)}
  </View>
);
}


export default function App() {

  console.log("entrou")
  const[cartas, setCartas] = useState([])

  // useEffect( () => {}, [])
  useEffect( () => {
    console.log("Entrou no useeffect")
    fetch("https://api.otaviolube.com/api/filmes").then(result => result.json()).then(objeto => {
      console.log(objeto.data);
      console.log("passou do useeffect")
      let resultado = objeto.data
      setFilmes(resultado)
      console.log(filmes)

    }).catch(error => console.log(error))
  }, [])
*/}
  {/*
  if(filmes && filmes.length){
    return (
      <View style={styles.container}>
        {listaFilmes.map(filme => <Filme filme={filme}/>)}
      </View>
    );
  }
  

  if (filmes && filmes.length) {
    return (
       <View>
       {
         filmes.map(filme => (
           <View>
          <Text> {filme.id}</Text>
          <Text> {filme.attributes.titulo} </Text>
          <Text> {filme.attributes.sinopse} </Text>
          <Text> {filme.attributes.createdAt}</Text>
          </View>
         ))
       }
        
      </View>
     )
  }

  return (<View>
    <Text> Carregando filmes </Text>
   </View>)
}
*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold'
  }
});
