import React from 'react';
import './Cards.scss';

class Card extends React.Component {
	constructor() {
		super();
		this.state = {
			isClicked: false
		};
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
	    this.setState(prevState => ({
	        isClicked: !prevState.isClicked
	    }));
	}

    render() {
		const cardClasses = this.state.isClicked ? "clicked card animate__animated animate__bounce" : "card animate__animated animate__bounce";
		return (
			<div className={cardClasses} onClick={this.handleClick}>
				<div className="header">
					{this.props.overlayCount && 
						<div className="overlay">
							<p className="count">{this.props.overlayCount}</p>
							<p className="descrip">Workouts</p>
							<img className="icon" src="assets/icn_playlist.svg" alt="" />
						</div>
					}
					<img className="thumb" src={this.props.headerImgUrl} alt="" />
				</div>
				<div className="details">
					<div className="basic-details">
						<p className="title">{this.props.title}</p>
						<img src={this.props.avatarUrl} className="avatar" alt="Instructor's Headshot" />
					</div>
					{this.props.time && this.props.dist &&
						<div className="more-details">
							{this.props.time && <p className="time"><i></i> {this.props.time}</p>}
							{this.props.dist && <p className="distance"><i></i> {this.props.dist}</p>}
						</div>
					}
					<a href={this.props.fullDetailsUrl} className="link-to-full-details">View Details</a>
				</div>
			</div>
		);
	}
}

export default Card;