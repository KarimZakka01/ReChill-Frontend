import React, { useState, useEffect  } from "react";
import { fetchQuestions } from "@services/apiService";

export function PersonalityTestPage() {
    type Question = {
        questionText: string;
        choices: { answerText: string; value: number }[];
      };
      // State variables
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Keeps track of the current question index
    const [answers, setAnswers] = useState<number[]>([]); // Stores the selected answers for each question
    const [personalityAdjective, setPersonalityAdjective] = useState<string | null>(null); // Stores the calculated personality adjective
    const [questions, setQuestions] = useState<Question[]>([]); // Stores the fetched questions from the API
    const [isLoaded, setIsLoaded] = useState(false);
    // Fetch questions from an API endpoint when the component mounts
    
    async function handleSubmit(){
      const data = await fetchQuestions();
      setQuestions(data.questions);
      setIsLoaded(true);
      
    }
    
    handleSubmit();
    
    const handleAnswerSelect = (choice: number) => {
    const updatedAnswers = [...answers]; // Create a copy of the answers array
    updatedAnswers[currentQuestionIndex] = choice; // Update the answer for the current question index with the selected choice
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) { // Move to the next question if there are more questions available
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1); // Move to the previous question if it's not the first question
    }
  };

  const handleFormSubmit = async () => {
    // Send the answers to the server to calculate the personality adjective
    const response = await fetch("http://localhost:8888/.netlify/functions/personalitytest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers }),
    });

    // Parse the response data
    const data = await response.json();
    setPersonalityAdjective(data.personalityAdjective); // Update the personalityAdjective state with the calculated value
  };

  const renderQuestion = () => {
    // Get the current question based on the current question index
    const question = questions[currentQuestionIndex];

    return (
      <div>
        <h2>{question.questionText}</h2>
        <ul>
          {question.choices.map((choice: { answerText: string; value: number }, index: number) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={choice.value}
                  checked={answers[currentQuestionIndex] === choice.value}
                  onChange={() => handleAnswerSelect(choice.value)}
                />
                {choice.answerText}
              </label>
            </li>
          ))}
        </ul>

        <button onClick={handlePreviousQuestion}>Back</button>
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    );
  };

  const renderResult = () => {
    return (
      <div>
        <h2>Your Personality Adjective: {personalityAdjective}</h2>
        {/* Add additional result information if needed */}
      </div>
    );
  };

  return (
    <div>
      {isLoaded ? <div>Questions Loading...</div> : <>
      <h1>Personality Test</h1>
      {personalityAdjective ? renderResult() : renderQuestion()}

      {currentQuestionIndex === questions.length - 1 && (
        <button onClick={handleFormSubmit}>Submit</button>
      )}
      </>
}
  
      
      
    </div>
  );
}
