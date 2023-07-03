import React from 'react';
import { v4 as uuid} from "uuid";

 function Skill(props) {
    const{name, imgUrl, starsTotal, starsActive}=props.Skill;

  const starsList=[];
  for( let i=0; i<starsTotal; i++){
    if(i<starsActive){
      starsList.push(<span key={uuid()} className="text-info h3">★</span>);
    }
    else{
      starsList.push(<span key={uuid()} className=" h3">★</span>);
    }
  }


  return (
    <div style={{border:"2px"}}>
                <img className=" rounded-circle"  src={imgUrl} alt={name} style= {{width: "100px" , height: "100px"  }}/>
                <div>
                    {starsList}
                </div>
            </div>
  );
}
export default Skill;