import React, { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case "INIT" :{
      return action.data
    }
    case "CREATE" : {
      const newState = [action.data, ...state]
      localStorage.setItem("news", JSON.stringify(newState))
      return newState
    }
    case "UPDATE" : {
      const newState = state.map((it)=>String(it.id) === String(action.data.id) ? {...action.data} : it)
      localStorage.setItem("news", JSON.stringify(newState))
      return newState
    }
    case "DELETE" : {
      const newState = state.filter((it) => String(it.id) !== String(action.targetID))
      localStorage.setItem("news", JSON.stringify(newState))
      return newState
    }
    default : {
      return state
    }
  }
}

export const DiaryStateContext = React.createContext()
export const DiaryDispatchContext = React.createContext() 