import React from 'react';
import './Reaction.css';

import StarEmoji from './imgs/reaction_icons/Star_Icon.svg';
import UpEmoji from './imgs/reaction_icons/Up_Icon.svg';
import DownEmoji from './imgs/reaction_icons/Down_Icon.svg';
import CashEmoji from './imgs/reaction_icons/Cash_Icon.svg';
import WowEmoji from './imgs/reaction_icons/Wow_Icon.svg';
import HahaEmoji from './imgs/reaction_icons/Haha_Icon.svg';

import StarText from './imgs/reaction_labels/Star_Text.svg';
import UpText from './imgs/reaction_labels/Up_Text.svg';
import DownText from './imgs/reaction_labels/Down_Text.svg';
import CashText from './imgs/reaction_labels/Cash_Text.svg';
import WowText from './imgs/reaction_labels/Wow_Text.svg';
import HahaText from './imgs/reaction_labels/Haha_Text.svg';

import button from './imgs/Reaction_Button.svg';
import menu from './imgs/Reaction_Icons_Menu.svg';

class ReactionMenu extends React.Component {
    render() {
        return (
            <img className="emoji" src={this.props.value} />
        )
    }
}

class ReactionButton extends React.Component {
    constructor(props) {
        super(props);
        let emojis = new Map()
        emojis.set("Star", Star)
        emojis.set("Up", Up)
        emojis.set("Down", Down)
        emojis.set("Cash", Cash)
        emojis.set("Wow", Wow)
        emojis.set("Haha", Haha)
        this.state = { emojis, selected: "Star", };
    }
    render() {
        var select = this.state.selected
        return (
            <div className="reaction-container">
                {/* TODO: top3 reaction-indicator "You and 2,335"*/}
                <ReactionMenu value={this.state.emojis.get("Star").svgIcon} />
                {/* reaction-menu */}
                <div class="btn-container">
                    <img src={button} class="reaction-btn"></img>
                    <img src={this.state.emojis.get(select).svgIcon} class="emoji-btn"></img>
                    <text class="label-btn">{select}</text>
                </div>
            </div>
        );
    }
}
export default ReactionButton;

const Star = {
    count: 1,
    svgIcon: StarEmoji,
    svgText: StarText
};
const Up = {
    count: 1,
    svgIcon: UpEmoji,
    svgText: UpText
};
const Down = {
    count: 1,
    svgIcon: DownEmoji,
    svgText: DownText
};
const Cash = {
    count: 0,
    svgIcon: CashEmoji,
    svgText: CashText
};
const Wow = {
    count: 0,
    svgIcon: WowEmoji,
    svgText: WowText
};
const Haha = {
    count: 0,
    svgIcon: HahaEmoji,
    svgText: HahaText
};
