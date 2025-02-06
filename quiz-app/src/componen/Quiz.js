import {useContext, useEffect, useState } from "react";
import QuestionsData from "../data/QuestionData";
import { DataContext } from "../App";

const Quiz =()=>{
    //console.log(QuestionsData);
    const [current, setCurrent] = useState(0)
    const [selectChoices, setSelectChoices] = useState("")
    const [score, setScore, setAppState] = useContext(DataContext)
    
    useEffect(()=>{
        checkAnswer()
    }, [selectChoices])

    const checkAnswer=()=>{
        if(selectChoices!==""){
            if(selectChoices===QuestionsData[current].answer){
                setScore(score+1)
                nextQuestion()
            }else{
                nextQuestion()
            }
        }
    }

    const nextQuestion=()=> {
        setSelectChoices("")
        if(current===QuestionsData.length-1){
            setAppState("score")
        }else{
            setCurrent(current+1)
        }
       
    }
    return( 
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectChoices("A")}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectChoices("B")}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectChoices("C")}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectChoices("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz;