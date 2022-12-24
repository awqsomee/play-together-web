import React, { FC, useState } from 'react'
import Layout from 'antd/es/layout/layout'
import { Row, Card, Form, Typography, Input, Button, Divider } from 'antd'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { authActions } from '../store/auth/auth-actions'
import TextArea from 'antd/es/input/TextArea'

const Acc: FC = () => {
  const dispatch = useAppDispatch()
  const { isLoading, error, user } = useAppSelector((state) => state.authToolkit)
  const [username, setUsername] = useState(user.username)
  const [description, setDescription] = useState(user.description)

  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card
          style={{
            width: 'fit-content',
            minHeight: 300,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Divider style={{ width: 600 }}>
            <Typography.Title style={{ margin: '5px' }} level={2}>
              {user.username}
            </Typography.Title>
          </Divider>
          <Typography.Title style={{ display: 'flex', justifyContent: 'center', margin: '0px 0px 40px 0px' }} level={5}>
            Edit your profile
          </Typography.Title>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true, username: user.username, description: user.description }}
            onFinish={() => {
              dispatch(authActions.editUserInfo({ username, description }))
            }}
            autoComplete="off"
          >
            {error && <Typography.Text type="danger">{error}</Typography.Text>}
            <Form.Item label="Username" name="username">
              <Input style={{ width: '400px' }} value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item label="Description" name="description">
              <TextArea
                style={{ width: '400px' }}
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
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
