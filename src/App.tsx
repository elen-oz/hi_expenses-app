import Button from './components/Button';

const App = () => {
  return (
    <>
      <Button color='primary' onClick={() => console.log('Clicked')}>
        My Button
      </Button>
    </>
  );
};

export default App;
