import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles, createStyles } from '@material-ui/styles';
import CancelImage from '../../generic/images/cancel-circle.png';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(
    createStyles({
        root: {
            fontFamily: 'Montserrat',
            fontSize: '15px',
            fontWeight: '600',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: '1.33',
            letterSpacing: 'normal',
            paddingLeft: '8px',
            borderRadius: '5px',
            border: '2px solid rgb(234,232,231)',
            backgroundColor: 'rgb(255,255,255)',
            color: '#adaba5',
            disableUnderline: true,
        },
        'disabled': {
            border: '2px solid  #f7f7f7',
            color: '#d8d8d8',
        },
        'focused': {
            border: '2px solid  #1b6af9',
            color: '#545454',
        },
        input: {
            fonFamily: 'Montserrat',
            fontSize: '15px',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: '1.33',
            letterSpacing: 'normal',
            border: 'none',
            color: '#545454',
            '&::-webkit-search-cancel-button': {
                position: 'relative',
                top: '3px',
                WebkitAppearance: 'none',
                height: '25px',
                width: '25px',
                backgroundImage: `url(${CancelImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '20px,20px'
            }
        },
        textField: {
            border: '2px solid rgb(234,232,231)',
            backgroundColor: 'rgb(255,255,255)',
            // marginLeft: theme.spacing(1),
            // marginRight: theme.spacing(1),
            width: 200,
        },
        dense: {
            marginTop: 19,
        },
        menu: {
            width: 200,
        },
    })
)

const DropDownField = (props) => {
    console.log("propss", props)
    const classes = useStyles()
    return (
        <TextField
            className={classes.textField}
            InputProps={{
                // classes: { input: input },
                disableUnderline: true
            }}
            select
            SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
            }}
            margin="normal"
            {...props}
        >
            <MenuItem value='ads'> some text </MenuItem>
            {/* <MenuItem /> goes heree */}
        </TextField>
    )
}

export default DropDownField