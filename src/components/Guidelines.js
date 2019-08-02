import React from 'react';
import { Helmet } from 'react-helmet';

import { Page } from './base/Page';

export class Guidelines extends Page {
  render() {
    return (
      <div className="page">
        <Helmet>
          <title>This is guidelines</title>
          <meta name="description" content="Guidelines page description" />
        </Helmet>
      Guidelines
      </div>
    );
  }
}
