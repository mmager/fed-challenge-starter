import React from 'react';
import Card from "./Card";
import cardsData from "./CardsData";

class App extends React.Component {
    render() {
        const cardComponents = cardsData.map(function(card) {
            return <Card key={card.id} headerImgUrl={card.headerImgUrl} title={card.title} avatarUrl={card.avatarUrl} time={card.time} dist={card.dist} fullDetailsUrl={card.fullDetailsUrl} overlayCount={card.overlayCount} />
        });

        return (
            <div className="cards">
                {cardComponents}
            </div>
        );
    }
}

export default App;