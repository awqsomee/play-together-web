import React, { FC, useState } from 'react'
import Layout from 'antd/es/layout/layout'
import { Row, Card, Form, Typography, Input, Button } from 'antd'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { authActions } from '../store/auth/auth-actions'

const Acc: FC = () => {
  const dispatch = useAppDispatch()
  const { isLoading, error, user } = useAppSelector((state) => state.authToolkit)
  const [username, setUsername] = useState(user.username)

  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card style={{ width: 400, minHeight: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true, username: user.username }}
            onFinish={() => {
              dispatch(authActions.editUserInfo({ username }))
            }}
            autoComplete="off"
          >
            {error && <Typography.Text type="danger">{error}</Typography.Text>}
            <Form.Item label="Username" name="username">
              <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Save
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </Layout>
  )
}

export default Acc
