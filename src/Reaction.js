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
            <img className="emoji-menu" src={this.props.value} />
        )
    }
}

function ReactionIndicator(props) {
    const icons = props.value;
    let emojiIcons = [];
    [...icons].forEach(emojiSvg => {
        emojiIcons.push(<img className="indicator-emoji" src={emojiSvg} ></img>);
    });

    return (
        <div className="reaction-indicator-container">
            {emojiIcons}
            <text class=""> You and 2,335</text>
        </div>
    )
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
        let topEmojis = [this.state.emojis.get("Star").svgIcon, this.state.emojis.get("Up").svgIcon, this.state.emojis.get("Down").svgIcon]
        return (
            <div className="reaction-container">
                <ReactionMenu value={this.state.emojis.get("Star").svgIcon} />
                <ReactionIndicator value={topEmojis} />
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
