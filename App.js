import React from 'react';
import MainRouter from './src/config/mainRouter';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainRouter />
    </QueryClientProvider>
  );
};

export default App;