// ---Dependencys
import { ReactElement } from 'react';

interface Count {
  id: number;
  value: number;
}
// ------------------------------------------ PROPS TYPES-----------------------------------------
interface Props {
  id: number;
  value: number;
  incremento: (singleCounter: Count)=>void;
  decremento: (singleCounter: Count)=>void;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Counter(props: Props): ReactElement {
  const { id, value, incremento, decremento } = props
  return (
    <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button onClick={()=>{decremento({id, value})}} type="button" className="button is-danger is-small">-</button>
        <button onClick={()=>{incremento({id, value})}} type="button" className="button is-success is-small">+</button>
      </div>
    </div>
  );
}
