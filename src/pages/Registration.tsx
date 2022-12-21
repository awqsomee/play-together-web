import React, { FC } from 'react'
import Layout from 'antd/es/layout/layout'
import { Row, Card } from 'antd'
import AuthForm from '../components/AuthForm'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from '../store/hooks'
import { authActions } from '../store/auth/auth-actions'

const Registration: FC = () => {
  const dispatch = useAppDispatch()
  const signUp = (username: string, password: string) => {
    dispatch(authActions.registration(username, password))
  }
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card style={{ width: 400, height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AuthForm title="Sign Up" onSubmit={signUp} />
        </Card>
      </Row>
    </Layout>
  )
}

export default Registration
