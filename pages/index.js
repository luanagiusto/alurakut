
import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {

  return (
    <Box as='aside'>

      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxlink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>

      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}


function ProfileRelationsBox(propriedades) {
  return (
    <ProfileRelationsBoxWrapper >

      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>

      {/* <ul>
              {seguidores.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`https://github.com/${itemAtual}.png`}  >
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul > */}


    </ProfileRelationsBoxWrapper >
  )
}


export default function Home() {

  const githubUser = 'luanagiusto';
  const [comunidades, setComunidades] = React.useState([{
    id: '1',
    title: 'Eu odeio acordar cedo',
    image: 'https://img10.orkut.br.com/community/52cc4290facd7fa700b897d8a1dc80aa.jpg'
  }]);

  const pessoasFavoritas = [
    'LucasTARosa',
    'Tarcisio-Menezes',
    'atsouza',
    'peas',
    'juunegreiros',
    'omariosouto']


  const [seguidores, setSeguidores] = React.useState([]);
  React.useEffect(function () {
    fetch('https://api.github.com/users/luanagiusto/followers')
      .then(function (respostaDoServidor) {
        return respostaDoServidor.json();
      })
      .then(function (respostaCompleta) {
        setSeguidores(respostaCompleta);
      })
  }, [])


  return (
    <>
      <AlurakutMenu />
      <MainGrid>

        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
          <hr />


        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">
              Bem-vindo
            </h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">
              O que você deseja fazer?
            </h2>
            <form onSubmit={function handleCriarComunidade(e) {
              e.preventDefault();

              // pegar os dados do formulario que foi digitado
              const dadosDoForm = new FormData(e.target);
              // console.log('Campo: ', dadosDoForm.get('title'));

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image')
              }
              // picsum.photos/200/300 para fotos aleatorias
              const comunidadesAtt = [...comunidades, 'Alura Stars'];
              setComunidades(comunidadesAtt);
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?" />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa" />
              </div>

              <button>
                Criar Comunidade
              </button>

            </form>

          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>

          <ProfileRelationsBox title="Seguidores" items={seguidores} />


          <ProfileRelationsBoxWrapper >
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/ users / ${itemAtual.title}`} >
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul >
          </ProfileRelationsBoxWrapper >

          <ProfileRelationsBoxWrapper >

            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/ users / ${itemAtual}`}  >
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul >


          </ProfileRelationsBoxWrapper >

          {/* <Box >
            Comunidades
          </Box> */}
        </div >

      </MainGrid >

    </>
  )
}
