import React from 'react';
import {Card, StyledBody, StyledThumbnail} from 'baseui/card';
import './TopicsOverview.css';

const TopicsOverview: React.FC = () => {
    return (
        <div className="ArticlesOverview">
            <Card title="Example card">
                <StyledBody>
                    Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                    ornare faucibus ex, non facilisis nisl.
                    <StyledThumbnail src={'https://source.unsplash.com/user/erondu/300x300'} />
                </StyledBody>
            </Card>
            <Card title="Example card">
                <StyledBody>
                    Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                    ornare faucibus ex, non facilisis nisl.
                    <StyledThumbnail src={'https://source.unsplash.com/user/erondu/300x300'} />
                </StyledBody>
            </Card>
        </div>
    );
};

export default TopicsOverview;
