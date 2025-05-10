import { useState, useEffect } from "react";
import Description from "../Description/Description.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Notification from "../Notification/Notification.jsx";
import css from "./App.module.css";


const LOCAL_STORAGE_KEY = 'feedback-data';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevType) => ({
      ...prevType,
      [feedbackType]: prevType[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div className={css.container}>
      <Description />
      <Options
        onFeedback={updateFeedback}
        onReset={resetFeedback}
        onHasFeedback={totalFeedback > 0}
      />
      {totalFeedback > 0 ? (
        <div>
          <h2 className={css.subtitle}>Statistics</h2>
          <Feedback
            feedback={feedback}
            total={totalFeedback}
            positive={positiveFeedback} />
        </div>
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}
