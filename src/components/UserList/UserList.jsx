import React from "react";

import Card from "../UI/Card/Card";
import classes from './UserList.module.scss'

function UserList(props) {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export default UserList