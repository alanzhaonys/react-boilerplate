import React from 'react';
import { Helmet } from 'react-helmet';

import { Page } from './base/Page';

export class Documentation extends Page {
  render() {
    return (
      <div className="page">
        <Helmet>
          <title>This is documentation</title>
          <meta name="description" content="Documentation page description" />
        </Helmet>
      Documentation
      </div>
    );
  }
}
