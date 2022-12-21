import React, { FC } from 'react'
import Layout from 'antd/es/layout/layout'
import { Row, Card } from 'antd'
import { useParams } from 'react-router-dom'

const Game: FC = () => {
  const { title } = useParams()

  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card style={{ width: 400, height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {title}
        </Card>
      </Row>
    </Layout>
  )
}

export default Game
