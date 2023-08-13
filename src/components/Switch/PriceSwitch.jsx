import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import './switch.css';
import { useContext } from 'react';
import { PriceContext } from '../../contexts/PriceContext';
const PriceSwitch = () => {
  const {price, setPrice} = useContext(PriceContext);
  return (
    <form>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Switch.Root data-state={price} onClick={()=>setPrice(!price)} className="SwitchRoot" id="airplane-mode">
          <Switch.Thumb  data-state={price}  onClick={()=>setPrice(!price)} className="SwitchThumb" />
        </Switch.Root>
      </div>
    </form>
  );
}

export default PriceSwitch;
