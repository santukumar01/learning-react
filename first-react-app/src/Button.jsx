// component -> 3 types (class based , function based , dynamic component)



// function Button (){
//     return (
//         <button >Like and share</button>
//     )
// }

// export default Button;  // component is export defautly



// export default function Button(){   // another way of exporting default
//    return (
//     <button>Like and share</button>
//    )
// }


// named export
function Button(){
    return (
        <button>Like and share</button>
    )
}

export  {Button};

