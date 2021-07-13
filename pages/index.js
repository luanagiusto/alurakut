
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  console.log('propriedades')

  return (
    <Box>

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



export default function Home() {
  const githubUser = 'luanagiusto';
  const pessoasFavoritas = ['LucasTARosa', 'Tarcisio-Menezes', 'atsouza', 'peas', 'juunegreiros', 'omariosouto']

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
        </div>

          <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
            <ProfileRelationsBoxWrapper >

              <h2 className="smallTitle">
                Pessoas da Comunidade ({pessoasFavoritas.length})
              </h2>

              <ul>
                {pessoasFavoritas.map((itemAtual) => {
                  return (
                    <li>
                      <a href={`/ users / ${itemAtual}`} key={itemAtual} >
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
