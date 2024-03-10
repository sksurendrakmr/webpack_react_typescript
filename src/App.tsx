import React from 'react'
import './style.css'
export const App = () => {
    return (
        <div>App {process.env.NODE_ENV} - {process.env.name}</div>
    )
}
