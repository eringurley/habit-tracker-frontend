import React from 'react';
import PropTypes from 'prop-types';

function HabitForm({ handleSubmit }) {
  const [habit, setHabit] = React.useState('');
  const [description, setDescription] = React.useState('');


  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(habit, description);

  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="habit name" value={habit} onChange={({ target }) => setHabit(target.value)} />
      <input type="text" placeholder="habit description" value={ description } onChange={({ target }) => setDescription(target.value)} />
      <button>Submit</button>
    </form>
  );
}

HabitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default HabitForm;
