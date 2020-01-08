import React from 'react';
import './menu-directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component'

class MenuDirectory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'women\'s',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'larger',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'men\'s',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.jpg',
                    size: 'larger',
                    id: 5,
                    linkUrl: ''
                },
            ]
        }
    }

    render(){
        return (
            <div className="menu-directory">
                {this.state.sections.map(({id, ...otherSectionsProps}) => (
                    <MenuItem key={id} {...otherSectionsProps} />
                ))}
            </div>
        );
    }
}

export default MenuDirectory;