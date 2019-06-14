import React,{Component} from 'react'


// Es un componente de react que espera en sus propiedades un enlace y representa la descripcion y url del enlace QUERIES: lOADING LINKS



class Link extends Component{
  render(){
    return(
      //remplazado por el codigo de arriba
      <div>
      <div>
      {this.props.link.description}({this.props.link.url})
      </div>
      </div>
    )
  }
}


export default Link
