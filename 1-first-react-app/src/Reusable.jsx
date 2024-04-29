function Random(){

    let number = Math.round(Math.random()*10);

    return (
        <div>
            Random Number is : {number}
        </div>
    )

}

export default Random;