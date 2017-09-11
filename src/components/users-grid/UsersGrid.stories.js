import React from 'react';
import { storiesOf } from '@storybook/react';
import UsersGrid from './UsersGrid';

storiesOf('User Grid', module)
  .add('with text and image', () => {
    const viewer = {
        user: {
            followers: {
                edges : [
                    {
                        node: {
                            id: 1,
                            name: 'Valter Júnior',
                            avatarUrl: 'https://avatars0.githubusercontent.com/u/397790?v=4'
                        }
                    },
                    {
                        node: {
                            id: 2,
                            name: 'Valter Júnior',
                            avatarUrl: 'https://avatars0.githubusercontent.com/u/397790?v=4'
                        }
                    }
                ]
            }
        }

    };
    return <UsersGrid viewer={viewer} />
  });
