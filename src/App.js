import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './App.css';
import Name from './components/name';
import Price from './components/price';
import Description  from './components/description';
import  Image  from './components/image';

function App() {
  return (
    <div className="App">
    <Card style={{ width: '18rem' }}>
    <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Description/>
        <Price/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
