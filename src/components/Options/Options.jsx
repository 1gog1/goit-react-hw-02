import css from "./Options.module.css";

export default function Options({ onFeedback, onReset, onHasFeedback }) {
  return (
    <div className={css.buttons}>
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>

      {onHasFeedback && (
        <button onClick={onReset}>Reset</button>
      )}
    </div>
  );
}
