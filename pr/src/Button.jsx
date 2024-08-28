export default function Button(){
    function handelClicked(event){
        console.log("clicked");
        console.log(event);
    }
    return(
        <div>
            <button onClick={handelClicked}>click me!</button>
        </div>
    )
}