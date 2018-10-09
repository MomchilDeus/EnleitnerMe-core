import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

// import { addCardCreator } from '../../actions';
import addStyles from './AddCard.module.scss';
import styles from '../../containers/Card/Card.module.scss';

class AddCard extends PureComponent {
  state = {
    answerShown: true
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={styles.card}>
        <form>
          <div className={styles.cardQuestion}>
            <h3>Question:</h3>
            <Field
              className={addStyles.textarea}
              name="question"
              component="textarea"
              type="text"
            />
          </div>
          <div className={styles.cardAnswer}>
            <h3>Answer:</h3>
            <Field
              className={addStyles.textarea}
              name="answer"
              component="textarea"
              type="text"
            />
          </div>
          <button
            className={addStyles.addCardBtn}
            onClick={handleSubmit(data => this.props.addCard(data))}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

AddCard = reduxForm({
  form: 'add'
})(AddCard);

export default AddCard;
