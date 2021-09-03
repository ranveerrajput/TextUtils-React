import React, {useState} from 'react'


export default function TextForm(props) {
    const [Text, setText] = useState("Enter text here");

    const handleUpClick = ()=> {
       // console.log("Uppercase was clicked");
       let newText = Text.toUpperCase()
        setText(newText);

    }

    const handleLoClick = ()=> {
        // console.log("Uppercase was clicked");
        let newText = Text.toLowerCase()
         setText(newText);
 
     }

    const handleOnChange = (event)=> {
       // console.log("On change");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color :props.mode==='light'?'black':'white'}}>
            <div className="mb-3" style={{color :props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control"  onChange={handleOnChange}   value={Text} id="myBox" rows="8" style={{backgroundColor :props.mode==='dark'?'#13466e':'white', color : props.mode==='light'?'black':'white'}}> </textarea>       
            </div>
            <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        
        <div className="container my-3" style={{color :props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} words and {Text.length} letters</p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0 }).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Nothing to Preview"}</p>
        </div>
        

        </>
        
    )
}
