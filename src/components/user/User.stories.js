import React from 'react';
import { storiesOf } from '@storybook/react';
import User from './User';

storiesOf('User', module)
  .add('with text and image', () => {
    const user = {
      name: 'Valter Júnior',
      avatarUrl: 'https://avatars0.githubusercontent.com/u/397790?v=4'
    };
    return <User user={user}  />
  });
