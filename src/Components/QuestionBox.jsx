import PropTypes from "prop-types";

const QuestionBox = (props) => {
  // eslint-disable-next-line react/prop-types
  const { qus, keys, currentOpen, onOpen } = props;

  const openStates = currentOpen === keys;

  const handleChange = () => {
    onOpen(openStates ? null : keys);
  };

  return (
    <div key={keys} className="list">
      <div className="list-title" onClick={() => handleChange(keys)}>
        <span>{keys < 9 ? `0${keys + 1}` : keys + 1}.</span>
        <h2>{qus.question}</h2>
        <span> {openStates ? "-" : "+"}</span>
      </div>
      {openStates ? <p>{qus.answer}</p> : ""}
    </div>
  );
};

QuestionBox.propTypes = {
  openStates: PropTypes.arrayOf(PropTypes.bool), // Assuming openStates is an array of booleans
  qus: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  keys: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func,
};

export default QuestionBox;
