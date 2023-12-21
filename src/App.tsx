import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color='primary' onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </>
  );
};

export default App;
