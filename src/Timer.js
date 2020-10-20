import React, { useState, useEffect } from 'react';
import { TimerContainer, ButtonsContainer, TypeText, TimerText, TimerButton, TimerButtonText } from './styles/components';
import ReactNativePickerModule from 'react-native-picker-module';

import { Layout, Text } from '@ui-kitten/components';

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

// const setTimerType = (chooser) => {
//   var type = 0;
//   switch (chooser) {
//     case 'UP':
//       type = 0;
//       break;

//     default:
//       break;
//   }
//   return type;
// }

export default function Timer() {
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);
  const [selectedType, setSelectedType] = useState("UP");
  const [data] = useState([
    "UP",
    "DO"
  ]);

  toggle = () => {
    setIsActive(!isActive);
  }
  
  reset = () => {
    setRemainingSecs(0);
    setIsActive(false);
  }

  changeType = (index) => {
    setSelectedType(index)
    if(index == 'DO'){
      setRemainingSecs(10);
    }
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      if(selectedType == "UP"){
        interval = setInterval(() => {
          setRemainingSecs(remainingSecs => remainingSecs + 1);
          console.log("Subindo");
        }, 1000);
      } else {
        if(remainingSecs == 0){
          this.reset();
        } else {
          interval = setInterval(() => {
            setRemainingSecs(remainingSecs => remainingSecs - 1);
            console.log("Descendo");
          }, 1000);
        }
      }
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  return (
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TypeText>{selectedType}</TypeText>
        <TimerText>{`${mins}:${secs}`}</TimerText>
        <ButtonsContainer>
          <TimerButton onPress={this.toggle}>
              <TimerButtonText>{isActive ? 'Pause' : 'Start'}</TimerButtonText>
          </TimerButton>
          <TimerButton onPress={this.reset}>
              <TimerButtonText>Reset</TimerButtonText>
          </TimerButton>
          <TimerButton onPress={() => {this.pickerRef.show()}}>
              <TimerButtonText>Type</TimerButtonText>
          </TimerButton>
        </ButtonsContainer>
        <ReactNativePickerModule
          pickerRef={e => this.pickerRef = e}
          value={selectedType}
          title={"Select Timer Type"}
          items={data}
          onValueChange={(index) => {
            this.changeType(index);
        }}/>
      </Layout>
  );
};