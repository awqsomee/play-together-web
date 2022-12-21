import React, { FC } from 'react'
import Layout from 'antd/es/layout/layout'
import { Row, Card, Typography } from 'antd'

const Main: FC = () => {
  return (
    <Layout>
      <Row justify="center" className="h100">
        <Card
          style={{
            width: 1280,
            margin: '40px',
            minHeight: 720,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography.Title>Welcome to</Typography.Title>
            <Typography.Title>PlayTogether App</Typography.Title>
          </div>
        </Card>
      </Row>
    </Layout>
  )
}

export default Main
