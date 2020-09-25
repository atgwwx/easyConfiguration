import React from 'react'

const buttonStyle = {
    padding: '5px 20px',
    minWidth: '80px',
    backgroundColor: 'red',
    border: 'none',
    color: 'white',
    display: 'inline-block'
}
class Button extends React.Component {
    static defaultProps = {
        text:'按钮'
    }
    onClick = () => {
        this.props.onClick && this.props.onClick();
    }
    render (){
        const {text} = this.props;
        return <div onClick={this.onClick} style={buttonStyle}>
            {text}
        </div>
    }
}

export default Button;