// ---Dependencys
import { ReactElement } from 'react';

interface Count {
  id: number;
  value: number;
}
// ------------------------------------------ PROPS TYPES-----------------------------------------
interface Props {
  values: Array<Count>;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Total({values}: Props): ReactElement {
  function getTotal() {
    let sum = 0;
    values.forEach( element => {
      sum += element.value
    });
    return sum
  }
  return (
    <div className="counter">
      Total: 
      {' '}
      {getTotal()}
    </div>
  );
}
