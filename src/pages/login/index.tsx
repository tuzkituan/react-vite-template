import React from 'react';
import { useAppDispatch, useAppSelector } from '../../config/hooks';
import { loginAsync, selectCurrentUser } from '../../features/userSlice';
import { Navigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

function Login() {
  const currentUser = useAppSelector(selectCurrentUser);
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();

  const onLogin = async (values: any) => {
    setLoading(true);
    await dispatch(
      loginAsync({
        email: values.email,
        password: values.password,
      }),
    );
    setLoading(false);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'block',
      }}
    >
      <div
        style={{
          maxWidth: 400,
          margin: '0 auto',
          width: '100%',
        }}
      >
        <h1>LOGIN</h1>
        {currentUser && <Navigate to="/" />}
        <Form onFinish={onLogin}>
          <Form.Item name="email">
            <Input size="large" placeholder="Email" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              size="large"
              style={{
                width: '100%',
              }}
              type="primary"
              loading={loading}
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
