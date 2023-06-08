import { useLoginMutation } from '@/services/api/auth';
import { isResponseError } from '@/services/helpers';
import { ILoginRequest } from '@/services/models/authentication/ILoginRequest';
import useAuth from '@/utils/hooks/useAuth';
import { Button, Form, Input, notification } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [login, { isLoading }] = useLoginMutation();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  const handleLogin = async (credentials: ILoginRequest) => {
    const response = await login(credentials);
    if (isResponseError(response))
      notification.error({
        message: response.error.message,
      });
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
        <Form onFinish={handleLogin}>
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
              loading={isLoading}
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
        <p>Built by HR-OS Team</p>
      </div>
    </div>
  );
}

export default Login;
