import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'

const TextArea = (props) => {
    const useStyles = makeStyles(
        createStyles({
            root: {
                border: 'solid 20px #000',
                color:'#0ff',
                '&:focus':{
                    border: 'solid 20px #000',
                }
            },
            focused:{
                border: 'solid 20px #000',
                
            }
        })
    )

    const classes = useStyles(props)
    return (
        <TextField
            // classes={{root: classes.root}}
            multiline rows='5'
            // className={classes.root}
            variant ='outlined'
            InputProps={{
                classes:{ focused:classes.focused ,root:classes.root},
                // className: classes.root,
                // classes:{root: classes.root},
                disableUnderline: true
            }}
            {...props} />
    )
}

export default TextArea