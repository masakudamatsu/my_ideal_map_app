import styled from 'styled-components';
import {useUser} from '@auth0/nextjs-auth0';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function HomePage() {
  const {user, error, isLoading} = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }
  return (
    <Button as="a" href="/api/auth/login">
      Login
    </Button>
  );
}
export default HomePage;
