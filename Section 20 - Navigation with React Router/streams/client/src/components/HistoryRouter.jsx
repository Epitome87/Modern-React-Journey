// implementation from https://github1s.com/remix-run/react-router/blob/HEAD/packages/react-router-dom/index.tsx#L133-L137
import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

export function HistoryRouter({ basename, children, history }) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
}
