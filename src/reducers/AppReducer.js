
const initialState = {
  header: { title: 'ReactNativeTest', actions: [] },
  itemList: [
    { id: '1', text: "Buy some cat food", description: "The cats are hungry" },
    { id: '2', text: "Learn F#", description: "Seems like a functional idea" },
    { id: '3', text: "Learn to play guitar", description: "Noted" },
    { id: '4', text: "Buy some new candles", description: "Pine and cranberry for that winter feel" },
    { id: '5', text: "Complete holiday shopping", description: "Keep it a secret!" },
    { id: '6', text: "Finish a todo list", description: "Done" },
  ]
}

export default AppReducer = (state = initialState, action) => {
  return state;
}