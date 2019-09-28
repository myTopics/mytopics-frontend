export const StateReducer: React.Reducer<any, any> = (state, action) => {
  switch (action.type) {
    case 'add_to_further_readings':
      console.log('add to further readings', action.payload);
      return { ...state, furtherReadings: [...state.furtherReadings, action.payload]}
    default:
      throw new Error();
  }
}
