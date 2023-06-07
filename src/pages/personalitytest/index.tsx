import React, { useState, useEffect } from "react";
import { fetchQuestions } from "@services/apiService";
import { BASE_URL } from "@services/apiService";
import "./personalitytest.style.css"; // Import the CSS file with the provided styling
import { Button } from "@components/button";

export function PersonalityTestPage() {
  type Question = {
    questionText: string;
    _id: string;
    choices: { _id: string; answerText: string; value: number }[];
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [personalityAdjective, setPersonalityAdjective] = useState<
    string | null
  >(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Tracks whether the form has been submitted

  async function handleSubmit() {
    const data = await fetchQuestions();
    setQuestions(data);

    renderResult();
    renderQuestion();
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleAnswerSelect = (choice: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = choice;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFormSubmit = async () => {
    if (!isSubmitted && answers.length === questions.length) {
      setIsSubmitted(true);
      const response = await fetch(`${BASE_URL}/personalitytest`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ answers }),
      });

      const data = await response.json();

      setPersonalityAdjective(data.personalityAdjective);
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];

    if (question !== undefined) {
      return (
        <div>
          <h2>{question.questionText}</h2>
          <ul>
            {question.choices.map((choice, index) => (
              <li key={index}>
                <label>
                  <div
                    className={`answer-box ${
                      answers[currentQuestionIndex] === choice.value
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleAnswerSelect(choice.value)}
                  >
                    <span className="answer-text">{choice.answerText}</span>
                  </div>
                </label>
              </li>
            ))}
          </ul>
          <div className="test-button-group">
            <Button onClick={handlePreviousQuestion}>Back</Button>
            {currentQuestionIndex !== questions.length - 1 && (
              <Button onClick={handleNextQuestion}>Next</Button>
            )}
          </div>
        </div>
      );
    }
  };

  const renderResult = () => {
    return (
      <div className="personality-test-result">
        <h2>Your Personality Adjective: {personalityAdjective}</h2>
        {/* Add additional result information if needed */}
        <Button onClick={handleRestart}>Restart</Button>
      </div>
    );
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0); // Reset the current question index
    setAnswers([]); // Reset the answers
    setPersonalityAdjective(null); // Reset the personality adjective
    setIsSubmitted(false); // Reset the submit state
  };

  if (questions !== undefined) {
    return (
      <div className="personality-test-container">
        {isLoaded ? (
          <div className="personality-test-loading">Questions Loading...</div>
        ) : (
          <>
            <h1 className="personality-test-header">Personality Test</h1>
            {personalityAdjective ? (
              <div className="personality-test-result">{renderResult()}</div>
            ) : (
              <div className="personality-test-question">
                {renderQuestion()}
              </div>
            )}

            {currentQuestionIndex === questions.length - 1 &&
              !personalityAdjective && (
                <div className="personality-test-submit">
                  {answers.length === questions.length ? (
                    <Button onClick={handleFormSubmit}>Submit</Button>
                  ) : (
                    <p className="warning-message">
                      Please answer all the questions
                    </p>
                  )}
                </div>
              )}
          </>
        )}
      </div>
    );
  } else {
    return <div className="personality-test-loading">Questions Loading...</div>;
  }
}
