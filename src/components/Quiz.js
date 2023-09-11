import React, {useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../components/Quiz.css'
import axios from 'axios';
export default function Quiz(){

        const {regno}=useParams()
        const navigate=useNavigate()
           
        const questions=[
    
            {
                question:"What does HTML stand for?",
                options:[
                    {optionText:"a) Hyperlink Text Markup Language",isCorrect:false},
                    {optionText:"b) Hyper Transfer Markup Language",isCorrect:false},
                    {optionText:"c) Hyper Text Markup Language",isCorrect:true},
                    {optionText:"d) High-Level Text Markup Language",isCorrect:false},
                ]
            },
            
            {
            question:"Which programming language is known for its use in \n data analysis and machine learning?",
            options:[
                {optionText:"a) Java",isCorrect:false},
                {optionText:"b) Python",isCorrect:true},
                {optionText:"c) C++",isCorrect:false},
                {optionText:"d) Ruby",isCorrect:false},
            ]},
        
            {
              question:"What does CPU stand for?",
              options:[
                  {optionText:"a) Central Processing Unit",isCorrect:true},
                  {optionText:"b) Computer Personal Unit",isCorrect:false},
                  {optionText:"c) Central Process Unit",isCorrect:false},
                  {optionText:"d) Computer Peripheral Unit",isCorrect:false},
              ]},
              {
                question:"Which programming language is known for its use in \n data analysis and machine learning?",
                options:[
                    {optionText:"a) Java",isCorrect:false},
                    {optionText:"b) Python",isCorrect:true},
                    {optionText:"c) C++",isCorrect:false},
                    {optionText:"d) Ruby",isCorrect:false},
                ]},
           ];
        
           const [counter,setCounter]=useState(0);
           const [result,setResult]=useState(0);
           const [timer, setTimer] = useState(1);
           const[Name,setName]=useState('user');
           const[timeSpend,getTimeSpend]=useState([]);

           const handleAnswerOptionClick=(correct)=>{
            if(correct){
              setResult(result+1);
            }
            timeSpend.push(parseInt(document.getElementById('time').innerText));
            getTimeSpend(timeSpend)
            console.log(timeSpend)
            if (counter < questions.length - 1) {
                setCounter(counter + 1);
                // Reset the timer for the next question
                setTimer(1); // You can adjust the timer duration here
              } else {
                // No more questions, navigate to the results page
                // You can replace this with your desired route
                // For example: history.push(`/results?score=${result}`);
              }
            counter<questions.length ? (setCounter(counter+1)):(setCounter(0))
            
           }

           const updateTimer = () => {
            if (timer < 60) {
              setTimer(timer + 1);
            } else {
              // Time's up, automatically go to the next question
              handleAnswerOptionClick(false); // Consider it as an incorrect answer
            }
          };

          useEffect(() => {
            // Start the timer when the component mounts
            const timerInterval = setInterval(updateTimer, 1000);
        
            // Clear the timer when the component unmounts
            return () => clearInterval(timerInterval);
          }, [timer]); // Run 


          const setScore=()=>{
            const sum=timeSpend.reduce((accu,val)=>accu+val,0);
            console.log(sum)
            
             axios.post('http://localhost:3001/data/'+regno+'/'+result+'/'+sum)
            .then((response) => {
              console.log(response.data[0].name)
              setName(response.data[0].name)
             })
             .catch((error) => {
              console.error('Error fetching data:', error);
              });
     
            navigate(`/thank-you/${Name}`)
      
      }

           return(
            <>
            {
            
            counter<questions.length ? (
                
            <div className="quiz_box">
                <header>
                    <div className="title">Software Contest | Quiz Application</div>
                    <div className="timer" >
            Time Left: <p id="time">{timer}</p> seconds
          </div>
                </header>
               
                <section>
                    <div className="que_text">
                    <span><pre> {questions[counter].question} </pre></span>
                    </div>
                    <div className="option_list">
                    {questions[counter].options.map((answerOption) => (
                      <>

                      <button className='options' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}><div className="option"><span>{answerOption.optionText}</span></div></button><br></br>
                      </>
                    ))}

                    </div>
                </section> 
                <footer>
                    <div className="total_que">
                    <span><p>{counter+1}</p> of <p>{questions.length}</p> Questions</span>    
                    </div>    
                </footer>
            
        </div>
        
            ):
            
            (
        <div className="result_box">
        <div className="icon">
            <i className="fas fa-crown"></i>
        </div>
        <div className="complete_text">
        <h4>You've completed the Quiz! please <b style={{color:"blue"}}>press</b> the exit quiz button</h4>
        </div>
    
    <div className="start_btn" >
    <button onClick={()=>setScore()}>Exit Quiz</button>
    </div>
     
    </div>
                
            )
            }    
            </>
        ) 
        }
