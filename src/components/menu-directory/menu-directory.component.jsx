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
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'women\'s',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'larger',
                    id: 4
                },
                {
                    title: 'men\'s',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.jpg',
                    size: 'larger',
                    id: 5
                },
            ]
        }
    }

    render(){
        return (
            <div className="menu-directory">
                {this.state.sections.map(({title, imageUrl, size, id}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        );
    }
}

export default MenuDirectory;