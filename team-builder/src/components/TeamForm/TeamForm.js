import React, { useState } from 'react';

import './TeamForm.scss'
import MenuItem from '../../../node_modules/@material-ui/core/MenuItem'; //'@material-ui/core/MenuItem'
import TextField from '../../../node_modules/@material-ui/core/TextField'; // @material-ui/core/TextField

const TeamForm = (props) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        role: ''
    })

    const changeHandler = (event) => {
        console.log(formState)
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='teamform-container'>
            <form
                className='teamform'
                autoComplete='off'
                onSubmit={(event) => props.addTeamMember(formState)}>
                <TextField
                    id="filled-name-input"
                    label="Name"
                    type="name"
                    name="name"
                    margin="normal"
                    variant="filled"
                    onChange={changeHandler}
                />
                <TextField
                    id="filled-email-input"
                    label="Email"
                    type="email"
                    name="email"
                    margin="normal"
                    variant="filled"
                    onChange={changeHandler}
                />
                <TextField
                    id="filled-role-input"
                    label="Role"
                    type="role"
                    name="role"
                    margin="normal"
                    variant="filled"
                    onChange={changeHandler}
                />
            </form>
        </div>
    )
}

export default TeamForm