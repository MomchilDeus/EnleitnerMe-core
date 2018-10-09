export const fetchCardsCreator = () => {
  console.log('FETCH_CARDS ACTION');
  return {
    type: 'FETCH_CARDS'
  };
};

export const addCardCreator = data => {
  console.log('ADD_CARD ACTION', data);
  return {
    type: 'ADD_CARD',
    data
  };
};
