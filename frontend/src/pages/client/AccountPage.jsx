import useAuth from '../../hooks/useAuth';

function AccountPage() {
  const { logout } = useAuth();

  return (
    <>
      <h1>My account</h1>
      <h1>My account</h1>
      <h1>My account</h1>
      <h1>My account</h1>

      <button onClick={logout}>Log out</button>
    </>
  );
}

export default AccountPage;
