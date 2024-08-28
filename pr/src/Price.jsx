export default function Price({oldPrice, newPrice}){
    let oldStyles ={
        textDecorationLine:"line-through",
    }  
    let newStyles ={
        fontWeight : "bold", 
    } 
    let styles ={
        backgroundColor : "#e0c367",
        height:"19%",
        borderBottomLeftRadius: "18px",
        borderBottomRightRadius: "18px"
    }
    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {/* nbsp :- means non breaking spaces for giving the spaces btn the span tags */}
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
};