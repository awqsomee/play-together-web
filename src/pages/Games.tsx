import React, { FC } from 'react'
import Layout from 'antd/es/layout/layout'
import { Row, Card } from 'antd'

const Games: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card style={{ width: 400, height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          GAMES
        </Card>
      </Row>
    </Layout>
  )
}

export default Games
