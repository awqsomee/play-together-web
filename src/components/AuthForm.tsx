import React, { FC, useState, useEffect } from 'react'
import { Button, Checkbox, Form, Input, Typography } from 'antd'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setError } from '../store/auth/auth'

interface IAuthForm {
  onSubmit: Function
  title: string
}

const AuthForm: FC<IAuthForm> = (props: { onSubmit: Function; title: string }) => {
  const dispatch = useAppDispatch()
  const { isLoading, error } = useAppSelector((state) => state.authToolkit)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  useEffect(() => {
    dispatch(setError(''))
  }, [props.title])

  const signUp = () => {
    props.onSubmit(username, password)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={() => {
        signUp()
      }}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {error && <Typography.Text type="danger">{error}</Typography.Text>}
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Input your username!' }]}>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Input your password!' }]}>
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>

      {props.title === 'Sign Up' ? (
        <Form.Item
          label="Repeat Password"
          name="repeatPassword"
          rules={[{ required: true, message: 'Repeat password!' }]}
        >
          <Input.Password value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
        </Form.Item>
      ) : (
        <></>
      )}

      {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          {props.title}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AuthForm
