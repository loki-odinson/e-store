import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div key = {id} className = 'item'>
        <div className = 'item-image'>
            <div className = 'background-image' style = {{
                backgroundImage: `url(${imageUrl})`
            }}>
            </div>
            <button>ADD TO CART</button>
        </div>
        <div className = 'item-details'>
            <span>{name}</span>
            <span>{price}</span>
        </div>
    </div>
);

export default CollectionItem;