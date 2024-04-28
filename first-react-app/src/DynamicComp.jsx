// we can write js inside jsx code using{}

function DynamicComp(){
    // for  varibale
    let name = "Santu Kumar"
    
    // for function / method

    let fullName =()=>{
        return "Sanu Kumar"
    }


    return (
        <div>
            You tution Teacher is : {name}
            <br />
            You tution Teacher is form function : {fullName()}
        </div>
    )
}
export default DynamicComp;