import { useState } from "react"

const CadastrarMarcas = ({data})=>{
    const [ value, setValue ] = useState("");
    const CadastrarMarcas = ()=>{
        console.log(value)
    }
    return(
      <div className="cadastrarMarcas">
        <div className="cadastrarMarcasTitle">
          Cadastrar Marcas
        </div>
        <input 
          placeholder="Nome da Marca"
          className="cadastrarMarcasInput"
          onChange={(e)=>{
            setValue(e.target.value)
          }}
        />
        <div className="cadastrarMarcasButtons">
          <input
            className="cadastrarMarcasButton"
            type="button"
            value="Voltar"
            onClick={()=>{
              document.getElementById(data).close();
            }}
          />
          <input
            className="cadastrarMarcasButton"
            type="button"
            value="Cadastrar"
            onClick={CadastrarMarcas()}
          />
        </div>
      </div>
    )
}
export default CadastrarMarcas