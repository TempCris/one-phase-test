// ---Dependencys
import { ReactElement, useState } from 'react';
// ---Components
import Counter from 'Cont/Home/components/Counter';
import Total from 'Cont/Home/components/Total';

// ------------------------------------------ COMPONENT-----------------------------------------
// Types
interface Count {
  id: number;
  value: number;
}
export default function HomeCont(): ReactElement {
  // --- Const Hooks and States
  const [data, setData] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
  ])
  // ---Main methods
  function incremento (singleCounter: Count){
    const {id, value } = singleCounter
    const newData = replaceAt(data,id, {...singleCounter, value: value + 1} )
    setData(newData);
    console.log('holo2');
  }
  function decremento (singleCounter: Count){
    const {id, value } = singleCounter
    const newData = replaceAt(data,id, {...singleCounter, value: value - 1} )
    setData(newData);
    console.log('holo2');
  }

  function addCounter() {
    setData([...data, { id: data.length, value: 0 }])
  }

  // ---Aux Methods
  function replaceAt(array: Array<Count>, index: number, value: Count) {
    let newArray:  Array<Count> = []
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if(i !== index){
        newArray=[...newArray, element]
      } else{
        newArray=[...newArray, value]
      }
    }
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
  }
  return (
    <>
      {
        data.map( element=> <Counter decremento={decremento} incremento={incremento} key={element.id} value={element.value} id={element.id} /> )
      }
      <button type="button" onClick={addCounter}>Add</button>
      <Total values={data} />
    </>
  );
}
