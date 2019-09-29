import { identifier } from "@babel/types";

export const StateReducer: React.Reducer<any, any> = (state, action) => {
  switch (action.type) {
    case 'add_to_articles_batch':
      const newArticlesMap = new Map(state.articles);
      action.payload.forEach((article: any) => {
        article.symbol = Symbol('article');
        newArticlesMap.set(article.symbol, article);
      });
      return { ...state, articles: newArticlesMap }
    case 'clear_articles':
      return { ...state, articles: []};
    case 'add_to_further_readings':
      return { ...state, furtherReadings: [...state.furtherReadings, action.payload]}
    case 'remove_from_further_readings':
      return { ...state, furtherReadings: [...state.furtherReadings.map((element: Symbol) => element !== action.payload)]}
    case 'open_history':
      return { ...state, historyOpen: true }
    case 'close_history':
      return { ...state, historyOpen: false }
    case 'show_fetch_loader':
      return { ...state, showFetchLoader: true }
    case 'hide_fetch_loader': 
      return { ...state, showFetchLoader: false }
    case 'push_to_history':
      const entry = {
        time: Date.now(),
        article: action.payload,
      }
      return { ...state, history: [...state.history, entry]}
    default:
      throw new Error();
  }
}
