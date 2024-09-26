import PropTypes from "prop-types";

const QuestionBox = (props) => {
  const { openStates, qus, keys, handleChange } = props;
  return (
    <div key={keys} className="list">
      <div className="list-title" onClick={() => handleChange(keys)}>
        <span>{keys < 9 ? `0${keys + 1}` : keys + 1}.</span>
        <h2>{qus.question}</h2>
        <span> {openStates[keys] ? "🔺" : "🔻"}</span>
      </div>
      {openStates[keys] ? <p>{qus.answer}</p> : ""}
    </div>
  );
};

QuestionBox.propTypes = {
  openStates: PropTypes.arrayOf(PropTypes.bool).isRequired, // Assuming openStates is an array of booleans
  qus: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  keys: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default QuestionBox;
