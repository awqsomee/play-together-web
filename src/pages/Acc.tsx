import React, { FC } from 'react'
import Layout from 'antd/es/layout/layout'
import { Row, Card } from 'antd'

const Acc: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card style={{ width: 400, height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          ACC
        </Card>
      </Row>
    </Layout>
  )
}

export default Acc
