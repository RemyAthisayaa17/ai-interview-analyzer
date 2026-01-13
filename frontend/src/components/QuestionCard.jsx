export default function QuestionCard({ question, answer, onChange }) {
  return (
    <div className="question-card">
      <h3>{question}</h3>
      <textarea
        value={answer}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your answer here..."
        rows={5}
      />
    </div>
  );
}
