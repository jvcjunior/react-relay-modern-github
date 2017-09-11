import React from 'react';
import { storiesOf } from '@storybook/react';
import UsersGrid from './UsersGrid';

storiesOf('User Grid', module)
  .add('with text and image', () => (
    <UsersGrid viewer={props} />
  ));
