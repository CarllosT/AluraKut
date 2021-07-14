import MainGrid from '../src/componentes/MainGrid/'
import Box from '../src/componentes/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/aluraKutCommons'
import {ProfileRelationsBoxWrapper} from '../src/componentes/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box >
        <img src={`https://github.com/${propriedades.gitHubUser}.png`} style={{borderRadius:'8px'}}/>
      </Box>
  )
};
//const Title = styled.h1`
  //font-size: 50px;
  //color: ${({ theme }) => theme.colors.primary};
  

// box onde será inserido o css html


export default function Home() {
    const gitHubUser = 'CarllosT'
    const pessoasFavoritas = [
      'juunegreiros',
      'juunegreiros',
      'juunegreiros',
      'juunegreiros',
      'juunegreiros',
      'juunegreiros',
      
    ]
  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
      <ProfileSidebar gitHubUser={gitHubUser} />

     </div>
      <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
      <Box>
        <h1 class="title">
          Bem Vindo (a)
        </h1>
        
        <OrkutNostalgicIconSet />
        
      </Box>
     </div>
     <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
       <ProfileRelationsBoxWrapper>
         <h2 class="smallTitle">
           Pessoas da Comunidade ({pessoasFavoritas.length})
         </h2>
       

          <ul>
              {pessoasFavoritas.map((gitHubUser) =>{
                return (

                  <li>
                     <a href={`/users/${gitHubUser}` } key={gitHubUser}>
                    <img src={`https://github.com/${gitHubUser}.png`} />
                    <span>{gitHubUser}</span>
                    </a>
                  </li>
                )
              })}
         </ul>

       </ProfileRelationsBoxWrapper>
     </div>
      
    </MainGrid>
    </>
  )
}
