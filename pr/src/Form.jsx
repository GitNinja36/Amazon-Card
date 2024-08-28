function handelFormSubmit(){
    event.preventDefault();
    console.log("form was Submitted");
}

export default function Form(){
    return(
        <form onClick={handelFormSubmit}>
            <input placeholder="Write Something"/>
            <button>Submit</button>
        </form>
    );
}