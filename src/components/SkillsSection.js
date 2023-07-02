import React from "react";
import Skill from "./Skill";
import {v4 as uuid} from "uuid";
import { Consumer } from "../context";

function SkillsSection(){
    return(
        <Consumer>
            {(value)=>{
                const {skills} = value;
                const finalSkillRow = [];
                for(let i =0; i< skills.length/4; i++){
                    let skillRow = skills.slice(i * 4, (i + 1) * 4);
                    finalSkillRow.push(
                    <div key={uuid()} className="d-flex justify-content-around py-3">
                        {
                            skillRow.map((skill)=>(
                                <Skill key={uuid()} Skill={skill}/>
                            ))
                        }
                    </div>
                    );
                }
                return(
                    <div className=" w-100 bg-light py-5">
                    <div className="container text-center">
                    <h1 className="font-weight-light"><span className="text-info">Technology</span> Stack</h1>
                    <div className="lead pb-4">I Design Develop & Deliver with these Weapons</div>
                    <div className="py-5">
                        {finalSkillRow}
                    </div>
                    </div>
                    </div>
                );
            }} 
        </Consumer>
        );
        }

export default SkillsSection;