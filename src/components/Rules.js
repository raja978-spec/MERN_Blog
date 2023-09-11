import { Link,useParams } from "react-router-dom";
import '../index.css'
export default function Rules(){

    const {regno}=useParams()

    return(
        
        <div className="info_box">
        <div className="info-title"><span>Some Rules of this Quiz</span></div>
        <div className="info-list">
            <div className="info">1. Don't <span>refresh</span> page.</div>
            <div className="info">2. Once you select your answer, it can't be undo.</div>
            <div className="info">3. You can't exit from the Quiz while you're playing.</div>
        </div>
        <div className="buttons">
           <Link to="/">
           <button className="quit">Exit Quiz</button>
           </Link>
            <Link to={`/quiz-for/${regno}`}>
            <button className="restart" >Continue</button>
            </Link>
        </div>
        <div className="buttons">

        </div>
    </div>


    );
}