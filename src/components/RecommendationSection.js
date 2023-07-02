import React from 'react'
import RecommendationCard from './RecommendationCard';
import {v4 as uuid} from "uuid";
import { Consumer } from '../context';

function RecommendationSection() {
    return(
        <Consumer>
            {(value) => {
                const {recommendations} = value;
                return (
                    <div className="container-fluid py-3" >
                        <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
                            {recommendations.map((recommendation)=>(
                                <RecommendationCard Key={uuid()} recommendation={recommendation}/>
                            ))}
                        </div>
                    </div>
                  );
            }}
        </Consumer>
    );
}

export default RecommendationSection;
