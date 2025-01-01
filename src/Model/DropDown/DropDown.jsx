import "./style.css";
const DropDown = ({data, set})=>{
    const handleClick = (down)=>{
        set(down.down);
        if(down.modal){
            document.getElementById(down.modalName).showModal()
        }
    }
    return(
        <div className="DropDown">
            <div 
                className="DropDownName"
                onClick={()=>{
                    set(data.name);

                }}
            >
                {data.name}
            </div>
            {
                data.down
                ?
                data.down.map(
                    down => 
                    <div 
                        className="DropDownDown"
                        key={down.down}
                        onClick={()=>{
                            handleClick(down)
                        }}
                    >
                        {down.down}
                    </div>
                )
                :
                ""
            }
        </div>
    )
}
export default DropDown;