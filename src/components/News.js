import React from 'react';
import { Helmet } from 'react-helmet';

import { Page } from './base/Page';

export class News extends Page {
  render() {
    return (
      <div className="page">
        <Helmet>
          <title>This is news</title>
          <meta name="description" content="News page description" />
        </Helmet>
        News
      </div>
    );
  }
}
