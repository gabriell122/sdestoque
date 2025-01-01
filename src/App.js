import { useEffect, useState } from "react";
import "./style.css";
import Navbar from "./Model/Navbar/Navbar.jsx";
import Modal from "./Model/Modal/Modal.jsx";
import CadastrarMarcas from "./Model/Form/CadastrarMarcas/CadastrarMarcas.jsx";
function App() {
  const [tela , setTela] = useState("oi");
  const [value, setValue] = useState("");
  useEffect(()=>{
    console.log(tela)
  },[tela])

  const navbar = {
    set: setTela,
    data:[
      {
        name:"Itens",
        down:[
          {
            down:"Estoques",
            modal:false,
            modalName:""
          },
          {
            down:"Cadastrar",
            modal:false,
            modalName:"cadastrarItens"
          }
        ]
      },
      {
        name:"Translações",
        down:[
          {
            down:"Cadastrar",
            modal:false,
            modalName: "cadastrarTranslações"
          }
        ]
      },
      {
        name:"Marcas",
        down:[
          {
            down:"Cadastrar",
            modal:true,
            modalName: "cadastrarMarcas"
          }
        ]
      },
      {
        name:"Tipos",
        down:[
          {
            down:"Cadastrar",
            modal: false,
            modalName: "cadastrarTipos"
          }
        ]
      }
    ]
  }
  
 
  const modalMarcas = {
    dialog:"cadastrarMarcas",
    conteudo: 
    <CadastrarMarcas 
      data={"cadastrarMarcas"}
      set={setValue}
    />,
  }
  return (
    <div>
      <header>
        <Navbar 
          data = {navbar}
        />
        <Modal 
          data = {modalMarcas}
        />
      </header>      
    </div>
  );
}

export default App;
