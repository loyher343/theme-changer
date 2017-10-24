import React, { Component } from 'react';

export default class TextContainer extends Component {
  render() {
    return (
      <div className="textContainer">
        <p style={ { color: this.props.fontColor, fontFamily: this.props.fontFamily, fontSize: this.props.fontSize } }>
        'Tis better to be vile than vile esteemed,
        When not to be receives reproach of being,
        And the just pleasure lost which is so deemed
        Not by our feeling but by others' seeing.
        For why should others' false adulterate eyes
        Give salutation to my sportive blood?
        Or on my frailties why are frailer spies,
        Which in their wills count bad what I think good?
        No, I am that I am, and they that level
        At my abuses reckon up their own;
        I may be straight, though they themselves be bevel.
        By their rank thoughts my deeds must not be shown,
          Unless this general evil they maintain:
          All men are bad, and in their badness reign.</p>
      </div>
    )
  }
}