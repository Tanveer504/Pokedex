import React,{useState} from "react";
import "./Description.scss";
function Description({ desc }) {
    const [toggle, setToggle] = useState(false);
  return (
    <>(<p className="pokemon__description">
        {desc.slice(0, 4).map((description, index) => (
          <span key={index}>{description.flavor_text.replace("", " ")}</span>
        ))}
        <span className="readmore" onClick={()=>setToggle(true) } >... read more</span>
      </p>)
      
     {toggle &&  <div class="pokemon__readmore">
      
      <p>
        <button className="readmore__btn" onClick={()=>setToggle(false)}>X</button>
        {desc.slice(0, 9).map((description, index) => (
          <span key={index}>{description.flavor_text.replace("", " ")}</span>
        ))}
      </p>

      </div>}
    </>
  );
}

export default Description;