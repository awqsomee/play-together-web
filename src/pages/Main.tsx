import React, { FC } from 'react'
import Layout from 'antd/es/layout/layout'
import { Row, Card } from 'antd'

const Main: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card style={{ width: 400, height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          MAIN
        </Card>
      </Row>
    </Layout>
  )
}

export default Main
