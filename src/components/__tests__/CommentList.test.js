import React from 'react';
import {mount} from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

ler wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentList />
        </Root>
    );
});

it('creates one LI per comment', () => {

});