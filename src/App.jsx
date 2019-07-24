import React from 'react';
import './App.css'
// import CustomButton from './components/CustomButton'
// import { ReactComponent as Cart } from './generic/images/cart.svg';
import CustomFormField from './components/CustomFormField'
import SearchField from './components/CustomFormField/SearchField'
import DropDownField from './components/CustomFormField/DropDownField'

function App() {
  return (
    <div className="App">
      {/* <CustomButton icon={<Cart />} pos='left' title='Primary' color='primary' variant='contained' />
      <CustomButton icon={<Cart />} pos='left' title='Secondary' color='secondary' variant='contained' />
      <CustomButton icon={<Cart />} pos='left' title='Tertiary' color='tertiary' variant='contained' />
      <CustomButton icon={<Cart />} disabled pos='left' title='Primary Custom' color='primary' variant='contained' />
      <CustomButton icon={<Cart />} disabled pos='left' title='Primary Custom' color='secondary' variant='contained' />
      <CustomButton icon={<Cart />} disabled pos='left' title='Primary Custom' color='tertiary' variant='contained' />

      <br />
      <CustomButton pos='left' title='Ghost Button' color='ghostPrimary' variant='text' />
      <CustomButton pos='left' title='Ghost Button' color='ghostPrimary' variant='text' disabled/>
      <CustomButton pos='left' title='Ghost Button' color='ghostSecondary' variant='text' />
      <CustomButton pos='left' title='Ghost Button' color='ghostSecondary' variant='text' disabled/> */}

      <br />
      <br />
      <br />
      {/* <CustomFormField placeholder='Placeholder' />
      <CustomFormField placeholder='Placeholder' disabled />
      <CustomFormField placeholder='Placeholder' errortext="Wrong Format" type='email' error /> */}

      {/* <SearchField placeholder='placeholder' name="searchh" disabled={false} type="search" />
      <SearchField placeholder='placeholder' disabled type="search" /> */}

      <DropDownField placeholder="asdasdds"/>

    </div>
  );
}

export default App;
