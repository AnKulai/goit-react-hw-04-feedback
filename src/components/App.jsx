import { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const values = Object.values(reviews);
    return values.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  };

  const countPositiveFeedbackPercentage = () => {
    const result = (reviews.good / countTotalFeedback()) * 100;
    return result.toFixed(1);
  };

  const onLeaveFeedback = ({ target }) => {
    const option = target.dataset.type;
    setReviews(prevState => {
      return { ...prevState, [option]: ++prevState[option] };
    });
  };

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: 'auto',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <Feedback state={reviews} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statictics">
        <Statistics
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
};

export default App;
