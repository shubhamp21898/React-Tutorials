import { useState } from 'react'

const Events=()=>{
    const [name, setName] = useState('');
    
    function handleClick(){
        alert("Clicked")
      }
      function handleMouseOver(){
        alert("Mouse over on paragraph");
      }
      function handleInputChange(e){
        setName(e.target.value);
      }
      function handleSubmit(e){
        e.preventDefault();

        alert("Form submit Now..")
      }
    return (

        <div>
        <h3>On Click event</h3>
        <button onClick={()=>alert("Button CLicked")}>click me</button>
        <form onSubmit={handleSubmit}>
            <h3>On change event</h3>
            <input type="text" onChange={(e)=>handleInputChange(e)}></input>
            <p id="p-input">Input text is : {name}</p>
            <h3>Form Submit Event event</h3>
            <button type="submit">Submit</button>
        </form>
        <p onMouseOver={handleMouseOver}>paragraph on Mouse Over event check </p>
        </div>
      )
}
export default Events