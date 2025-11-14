const style:React.CSSProperties = { height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  fontWeight: 'bolder',
};

function NotFound() {
  return (
    <div style={ style }>Oops... não encontrado.</div>
  );
}

export default NotFound;