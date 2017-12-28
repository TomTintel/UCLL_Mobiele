export const addExpense = (amount,description,whopaid) => {
    return {
      type: 'ADD_EXPENSE',
      payload: {
        id: uid(),
        amount,
        description,
        whopaid
        
      }
    };
}



// hack for generating passable unique ids
// TODO: fix this!
const uid = () => Math.random().toString(34).slice(2);
