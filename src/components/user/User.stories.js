import React from 'react';
import { storiesOf } from '@storybook/react';
import User from './User';

storiesOf('User', module)
  .add('with text and image', () => (
    <User user={{'name':'username', 'avatarUrl':''}}  />
  ));
