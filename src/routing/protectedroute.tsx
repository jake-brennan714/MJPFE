import { Navigate } from "react-router-dom";
import { Component } from "react";

export class ProtectedRoute extends Component<{ user: boolean, children: JSX.Element }> {
    render() {
        const {user, children} = this.props;
        if (!user) {
            return <Navigate to="/home" replace/>;
        }

        return children;
    }
}