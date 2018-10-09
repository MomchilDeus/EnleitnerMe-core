const reducer = (state = { cards: [] }, action) => {
  switch (action.type) {
    case 'FETCH_CARDS_SUCCESS':
      console.log('FETCH_CARDS_SUCCESS');
      return state;
    case 'FETCH_CARDS_FAIL':
      console.log('FETCH_CARDS_FAIL');
      return state;
    case 'ADD_CARD_SUCCESS':
      console.log('ADD_CARD_SUCCESS');
      return state;
    case 'ADD_CARD_FAIL':
      console.log('ADD_CARD_FAIL');
      return state;
    default:
      console.log('DEFAULT CASE');
      return state;
  }
};

export default reducer;
