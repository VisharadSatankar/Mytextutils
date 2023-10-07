import React , {useState} from 'react'
//Using usestate we can change the value of text using the function settext......using the default value of as enter the text here


export default function TextForm(props) {
    const [text , setText] = useState('Enter your text here');
    const handleonchange = (event) =>{
        //using event becuse we want we see the reflected change in values.
        setText(event.target.value)
        // console.log(event.target.value);
    }
    const handleupclick = () =>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleloclick = () =>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handlerevclick = () =>{
        let str = '';
        for(let i = text.length - 1; i >= 0; i--){
            str = str + text[i];
        }
        let newtext = str;
        setText(newtext);
    }
    const handleclrclick =() =>{
        let s = '';
        setText (s);
    }
    
    function wordscount(){
        let count = 0 ;
        for(let i = 0; i < text.length ; i++){
            if(text.split(" ")[i] === " "){
                count ++ ;
            }
        }
        return text.length - count;
    }

  return (
    
 <div className="container" style={{color:props.mode==='light'?'black':'white' , backgroundColor : props.mode==='dark'?'#0a2037':'white'}}>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><h3>{props.heading}</h3></label>
  <textarea className="form-control"   value={text} 
  onChange={handleonchange} style={{color:props.mode==='light'?'black':'white' , backgroundColor : props.mode==='dark'?'#0a2037':'white'}}
  //using on change as we need to reflect changes in the given text in as entered by the user
  id="exampleFormControlTextarea1" rows="8"> </textarea>
</div>
{/* used to onclick */}
<button disabled={text.length===0} className="btn btn-primary my-1" onClick = {handleupclick}> 
    Convert to Uppercase 
</button>
<button disabled={text.length===0}className="btn btn-primary mx-4 my-1" onClick = {handleloclick}> 
    Convert to Lowercase
</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handlerevclick}> 
    Reverse the Text
</button>
<button className="btn btn-danger mx-5 my-1" onClick = {handleclrclick}> 
    Clear the Text
</button>

<div className="container my-3" style={{color:props.mode==='light'?'black':'white' , backgroundColor : props.mode==='dark'?'#0a2037':'white'}}>
    <h3>You Entered</h3>
    {/* filter return true and false */}
    <p>{text.split(" ").filter((element=>{return element.length!==0})).length} words and {wordscount()}  characters</p>
    <h3>Preview</h3>
    <p> {text.length>0?text:'Your text will be previewed here'}</p>
</div>
</div>
  )
}
