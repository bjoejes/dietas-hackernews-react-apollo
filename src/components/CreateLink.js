import React,{Component} from 'react'

//codigo gql para la insercion
const POST_MUTATION = gql`
  mutation PostMutation()
`

//Crea los componentes
class CreateLink extends Component {
  state={
    description:''
    url:''
  }

//Crea las entradas de datos para el almacenamiento
  render() {
    const {description,url} = this.state
    return(
      <div>
      <div className="flex flex-column mt3">
      <input className="mb2"
      value={description}
      onChange={e=> this.setState({description:e.target.value})}
      type="text"
      placeholder="Adescription for the link"
      />
      <input
      className="mb2"
      value={url}
      onchange={e=>this.setState({url:e.target.value})}
      type="text"
      placeholder="The URL for th link"
      />
      </div>
      <button onClick={`... you'l implement this`}>Submit</button>
      </div>
    )

  }
}

export default CreateLink
