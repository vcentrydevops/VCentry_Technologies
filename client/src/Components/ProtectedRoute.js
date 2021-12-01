import React from 'react'
import { Redirect } from 'react-router-dom'

function ProtectedRoute(props) {
    const Component = props.component
    let isprotected = sessionStorage.getItem('vcentry_admin') ? true : false
    return (
        isprotected ? <Component></Component> : <Redirect to="/admin/sign-in"></Redirect>
    )
}

export default ProtectedRoute
