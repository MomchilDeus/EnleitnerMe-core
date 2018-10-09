import React, { PureComponent } from 'react';

import styles from './Card.module.scss';

class Card extends PureComponent {
  state = {
    answerShown: false
  };

  render() {
    const cardActions = !this.state.answerShown ? (
      <div
        className={styles.show}
        onClick={() => this.setState({ answerShown: true })}>
        Show Answer
      </div>
    ) : (
      <React.Fragment>
        <div className={styles.guessFail}>X</div>
        <div className={styles.guessSuccess}>Success</div>
      </React.Fragment>
    );
    const answer = !this.state.answerShown ? null : (
      <div className={styles.cardAnswer}>
        <h3>Answer:</h3>
        <p>
          This is an example answer. This is an example answer. This is an
          example answer. This is an example answer. This is an example answer.
          This is an example answer. This is an example answer.
        </p>
      </div>
    );

    return (
      <div className={styles.card}>
        <div className={styles.cardAnswer}>
          <h3>This is an example question</h3>
        </div>
        {answer}
        <div className={styles.cardActions}>{cardActions}</div>
      </div>
    );
  }
}

export default Card;
