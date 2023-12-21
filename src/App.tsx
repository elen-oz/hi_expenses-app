import ListGroup from './components/ListGroup';

const App = () => {
  let items = ['New York', 'Stockholm', 'Moscow', 'Istanbul', 'Madrid'];

  return (
    <>
      <ListGroup items={items} heading='Cities' />
    </>
  );
};

export default App;
