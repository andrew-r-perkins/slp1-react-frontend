import React, { useState } from "react";
import axios from "axios";

const QuestionForm = ({ imageUrl }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    try {
      const response = await axios.post("https://tptywd4f2c.execute-api.us-east-2.amazonaws.com/dev/ask", {
        image_url: imageUrl,
        question: question,
      });
      setAnswer(response.data.answer || "Answer not available."); // Assuming API returns an answer field.
    } catch (error) {
      console.error("Question submission error:", error);
      alert("Failed to submit the question.");
    }
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Enter your question about the image..."
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {answer && (
        <div>
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionForm;

