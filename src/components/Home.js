import React from 'react';
import { Helmet } from 'react-helmet';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Page } from './base/Page';

export class Home extends Page {
  render() {
    return (
      <div className="page">
        <Helmet>
          <title>This is home</title>
          <meta name="description" content="Home page description" />
        </Helmet>
          <Container>
            <Row>
              <Col md={12}>
                Home
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}
