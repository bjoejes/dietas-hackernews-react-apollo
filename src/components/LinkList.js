import React,{Component} from 'react'
import Link from './Link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

//Consulta desde javascript para obtener contenido almacenado en base de datos
//gql es una funcion que almacenara el codigo que pasara a GraphQL
const FEED_QUERY = gql`{
  feed{
    links{
      id
      createdAt
      url
      description
    }
  }
}`

//Implementa el componente renderizado en una lista de links  QUERIES: lOADING LINKS
class Linklist extends Component{
  render(){
    return(
      <Query query={FEED_QUERY}>
        {({loading,error,data}) =>{
          //Cuando la solicitud esta en curso y no se ha recibido respuesta
          if(loading) return <div>Fetching</div>
          //Si la solicitud falla, tendra el por que de la falla
          if(error) return <div>Error</div>
          //Datos reales recibidos del servidor
          const linksToRender = data.feed.links

          return(
            <div>
            {linksToRender.map(link => <Link key={link.id} link={link} />)}
            </div>
          )
        }
      }
      </Query>
    )
  }
}

export default Linklist
