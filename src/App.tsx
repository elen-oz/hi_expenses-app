import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button/Button';
import ListGroup from './components/ListGroup/ListGroup';
import Like from './components/Like';

const App = () => {
  // const [alertVisible, setAlertVisible] = useState(false);
  // const items = ['Stockholm', 'Madrid', 'Moscow', 'Istanbul'];

  // return (
  //   <>
  //     <ListGroup
  //       heading='Cities'
  //       items={items}
  //       onSelectItem={() => console.log('Clicked')}
  //       // 45 min
  //     />
  //     {alertVisible && (
  //       <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
  //     )}
  //     <Button color='primary' onClick={() => setAlertVisible(true)}>
  //       My Button
  //     </Button>
  //   </>
  // );
  return <Like onClick={() => console.log('clicked')} />;
};

export default App;
