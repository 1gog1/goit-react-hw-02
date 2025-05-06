import css from './Options.module.css'


export default function Options({ feedback }) {
    return (
        <div>
            <p>
                Options:
            </p>
            <ul>
                <li>Good: {feedback.good}</li>
                <li>Neutral: {feedback.neutral}</li>
                <li>Bad: {feedback.bad}</li>
            </ul>
    </div>
     
        
    )
}