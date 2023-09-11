import React, {useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../index.css'
/*
export default function App() {

    const questions=[
    
    {
        question:"Question end",
        options:[
            {optionText:"end",isCorrect:"end"},
            
        ]
    },
    
    {
        question:"Who is the father of computer?",
        options:[
            {optionText:"Charles",isCorrect:false},
            {optionText:"Babage",isCorrect:false},
            {optionText:"Charles Babage",isCorrect:true},
        ]
    },
    
    {
    question:"Who  computer?",
    options:[
        {optionText:"Charles",isCorrect:false},
        {optionText:"Babage",isCorrect:false},
        {optionText:"Charles Babage",isCorrect:true},
    ]},

    {
    question:"Who is the father ",
    options:[
        {optionText:"Charles",isCorrect:false},
        {optionText:"Babage",isCorrect:false},
        {optionText:"Charles Babage",isCorrect:true},
    ]},
    
    {
    question:"Who  of computer?",
    options:[
        {optionText:"Charles",isCorrect:false},
        {optionText:"Babage",isCorrect:false},
        {optionText:"Charles Babage",isCorrect:true},
    ]},

   ];

   const [counter,setCounter]=useState(1);
   const [result,setResult]=useState(0);
   const handleAnswerOptionClick=(correct)=>{
    if(correct){
      setResult(result+1);
    }
    counter<questions.length ? (setCounter(counter+1)):(setCounter(0))
    
   }
	return (
        <div className='app'>
         {      
            counter<questions.length ? (
            <>
            <div className='question-section'>
                <div className='question-count'>
                    <span>{counter}</span>/{questions.length-1}
                </div>
                <div className='question-text'>{questions[counter].question}</div>
            </div>
            <div className='answer-section'>
            {questions[counter].options.map((answerOption) => (
                        <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.optionText}</button>
                    ))}
            </div>
            </>
            )
            :
            (
                <>
                <h1>Thank you for attending our quiz <br></br><b><br></br><br></br><center><Link to={`/${result}`}>wait for results</Link></center></b></h1>
                
                </>
                
            )
            }
        
    </div>

    );
}
*/
export default function Home(){

    const{regno}=useParams()

    const hideButton=()=>{
       document.getElementById('bb').hidden=true;
    }

    return(
        <>
    <div className="h"><h1>QUTRIX-2K23</h1>
    <h3>Software Contest</h3></div>

    <Link to={`/rules-for/${regno}`}>
    <div className="start_btn" >
    <button id="bb" onClick={hideButton}>Start Quiz</button>
    </div>
    </Link>
   
        </>
    )
}