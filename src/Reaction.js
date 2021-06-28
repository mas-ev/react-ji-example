import React from 'react';
import './Reaction.css';
//import { ReactSVG } from 'react-svg'
import StarEmoji from './imgs/reaction_icons/Star_Icon.svg'

import Emojis from './Emojis';
import button from './imgs/Reaction_Button.svg';
import menu from './imgs/Reaction_Icons_Menu.svg';

class ReactionMenu extends React.Component {
    render() {
        return (
            //<div>{this.props.value}</div>
            <img className="emoji" src={this.props.value} />
            //<ReactSVG className="emoji" src={this.props.value} />
        )
    }
}

class ReactionButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = StarEmoji;
    }
    render() {
        return (
            <div className="reaction-container">
                {/* reaction-indicator */}
                <ReactionMenu value={this.state} />
                {/* reaction-menu */}
                <img src={button} class="reaction-button"></img>
            </div>
        );
    }
}
export default ReactionButton;