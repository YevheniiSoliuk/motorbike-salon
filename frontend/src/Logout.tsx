const Logout = () => {
  const handleLogoutClick = () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    localStorage.removeItem('uuid');
  };

  return (
    <a href='/' className='headerText' onClick={handleLogoutClick}>
      Wylogowanie
    </a>
  );
};

export default Logout;
