import { Navigate } from 'react-router-dom';

function withAuth(WrappedComponent: React.ComponentType<any>) {
  return function AuthenticatedComponent(props: any) {
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return <WrappedComponent { ...props } />;
  };
}

export default withAuth;

/* a função desse HOC é verificar se um usuário está autenticado
antes de permitir o acesso a um determinado componente. */