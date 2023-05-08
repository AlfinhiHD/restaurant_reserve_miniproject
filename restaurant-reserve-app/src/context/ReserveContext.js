import React from "react"

// set context
const ReserveContext = React.createContext({
    reserve: [], // initial state
    setReserve: () => {} // initial method setState
})

export default ReserveContext