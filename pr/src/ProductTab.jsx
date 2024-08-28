//import Product component
import Product from './Product'

function ProductTab(){
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems : "center"
         
    };
    return (
        <div style={styles}>
            <Product title ="Logitic MX Master" idx={0}/>
            <Product title ="apple pencile" idx={1}/>
            <Product title ="Zebronics Zeb-trnasformer " idx={2}/>
            <Product title ="Petronics Tab" idx={3}/>        
        </div>
    );
}
export default ProductTab;