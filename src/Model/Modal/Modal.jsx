const Modal = ({data})=>{
    // const data = {
    //     name:"",
    //     className:"",
    //     dialog:"",
    //     conteudo:""
    // }
    return(
        <dialog 
            className="dialogModal"
            id={data.dialog}
        >
            {data.conteudo}
        </dialog>
    )
}
export default Modal;