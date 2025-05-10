import css from "./Feedback.module.css";

export default function Feedback({ feedback, total, positive }) {
  return (
    <div className={css.list}>
      <p>Feedback stats:</p>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positive}</li>


        
      </ul>
    </div>
  );
}
