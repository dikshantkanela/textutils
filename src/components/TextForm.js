import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (e)=>{
        console.log("On Change");    {/*faaltu*/ }
        setText(e.target.value);
    }   
    const handleUpClick = ()=>{
        console.log("UpperCase was Clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase","success")
    }

    const handleDownClick = ()=>{
      console.log("Lowercase was clicked")
      setText(text.toLocaleLowerCase());
      props.showAlert("Converted to Lowercase","success")
    }
    const handleCamelCase = () => {
      const camelCaseText = text.replace(/[-_]+([a-zA-Z0-9])/g, function(match, letter) {
        return letter.toUpperCase();
      });
      setText(camelCaseText);
      props.showAlert("Converted to camelCase","success");
    }
    
    const handleExtraSpace = ()=>{
      setText(text.replace(/\s+/g, ' ').trim());
      props.showAlert("Removed Extra Spaces","success")
    }
    const [text,setText]= useState('Enter Your Text Here : ');
  return (
    <>
    <div className='container' style = {{color:props.mode ==='dark'?'white':'#212529'}}>
        <h1>{props.heading} </h1>
    <div className="form-group">
      
      <textarea className="form-control" style={{backgroundColor:props.mode ==='light'?'white':'#212529',color:props.mode ==='dark'?'white':'#212529'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-3" onClick={handleCamelCase}>Convert to Camel Case</button>
    <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"  style = {{color:props.mode ==='dark'?'white':'#212529'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length}  Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Write Something to Preview'}</p>
    </div>
    </>
  )
}
