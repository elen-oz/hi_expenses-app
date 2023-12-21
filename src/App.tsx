import ListGroup from './components/ListGroup';

const App = () => {
  let items = ['New York', 'Stockholm', 'Moscow', 'Istanbul', 'Madrid'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
    </>
  );
};

export default App;
