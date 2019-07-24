import React from 'react'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import TertiaryButton from './TertiaryButton'
import GhostPrimary from './GhostPrimary'
import GhostSecondary from './GhostSecondary'
import PropTypes from 'prop-types'

const CustomButton = (props) => {
    if (props.color === 'primary') {
        return <PrimaryButton {...props} />
    }
    else if (props.color === 'secondary') {
        return <SecondaryButton {...props} />
    }
    else if (props.color === 'tertiary') {
        return <TertiaryButton {...props} />
    } 
    else if (props.color === 'ghostPrimary') {
        return <GhostPrimary {...props} />
    }
    else if (props.color === 'ghostSecondary') {
        return <GhostSecondary {...props} />
    }
    else {
        return <PrimaryButton {...props} />
    }
}

CustomButton.defaultProps = {
    color: 'primary',
    pos: 'left'
};

CustomButton.propTypes = {
    pos: PropTypes.oneOf(['left', 'right']),
    col: PropTypes.oneOf(['primary', 'secondary', 'tertiary',]),
};

export default CustomButton
