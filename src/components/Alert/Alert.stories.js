// Alert.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';

import Alert from './Alert';

export default {
  title: 'Alert',
  component: Alert,
};

export const Success = () => (
  <Alert type="success" message="Operation successful!" />
);

export const Error = () => (
  <Alert type="error" message="Something went wrong!" />
);

// Optional: You can add actions to log events in the Storybook UI
Success.story = {
  decorators: [action('Success Alert Clicked')],
};

Error.story = {
  decorators: [action('Error Alert Clicked')],
};
