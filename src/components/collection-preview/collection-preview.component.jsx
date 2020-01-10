import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';
import { findAllByTitle } from '@testing-library/react';

const CollectionPreview = ({title, id, items}) => (
    <div key = {id} className = 'collection-preview'>
        <h2 className = 'title'>{title}</h2>
        <div className = 'preview'>
            {items
                .filter((item, index) => index < 4)
                .map(({id , ...otherItemProps}) => (
                    <CollectionItem key = {id} {...otherItemProps} />
            ))}
        </div>
    </div>
);

export default CollectionPreview;