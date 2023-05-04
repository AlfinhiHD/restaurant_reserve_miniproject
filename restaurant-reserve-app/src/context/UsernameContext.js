import React from "react"

// set context
const UsernameContext = React.createContext({
    username: [], // initial state
    setUsername: () => {} // initial method setState
})

export default UsernameContext

//kurang setting di router