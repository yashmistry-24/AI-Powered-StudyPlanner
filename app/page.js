'use client';

import { useState } from 'react';

export default function Home() {
  const [studyTopics, setStudyTopics] = useState('');
  const [days, setDays] = useState('');
  const [studyPlan, setStudyPlan] = useState('');

  const generateStudyPlan = async () => {
    const response = await fetch('/api/generate-plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studyTopics, days }),
    });

    if (response.ok) {
      const data = await response.json();
      setStudyPlan(data.studyPlan);
    } else {
      const errorData = await response.json();
      console.error('Error generating the study plan:', errorData);
    }
  };

  return (
    <div className="main-container">
      <div className="hero-section">
        <h1>AI-Powered Study Planner</h1>
        <p>Input your study topics and available days, and let the AI generate a tailored study plan for you!</p>
      </div>

      <div className="input-section">
        <textarea
          value={studyTopics}
          onChange={(e) => setStudyTopics(e.target.value)}
          placeholder="List your study topics here"
          className="input-box"
        />
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="Number of days"
          className="input-box"
        />
      </div>

      <div className="action-btn-container">
        <button onClick={generateStudyPlan} className="generate-btn">
          Generate Plan
        </button>
      </div>

      {studyPlan && (
        <div className="plan-output">
          <h2>Your Customized Study Plan</h2>
          <pre>{studyPlan}</pre>
        </div>
      )}
    </div>
  );
}
