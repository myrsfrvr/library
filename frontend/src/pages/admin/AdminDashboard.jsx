import useAuth from '../../hooks/useAuth';

function AdminDashboard() {
  const { logout } = useAuth();

  return (
    <>
      <h1>Admin Dashboard</h1>
      <h1>Admin Dashboard</h1>
      <h1>Admin Dashboard</h1>
      <h1>Admin Dashboard</h1>

      <button onClick={logout}>Log out</button>
    </>
  );
}

export default AdminDashboard;
