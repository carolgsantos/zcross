import styled from "styled-components";
import { Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const timerColor = 'red';
const typeColor = 'green';

// The Button from the last section without the interpolations
export const TypeText = styled.Text`
  font-family: DS-Digital;
  font-size: 140px;
  margin-bottom: 10px;
  color: ${typeColor};
  text-shadow-color: ${typeColor};
  text-shadow-offset: {width: 0px, height: 0px};
  text-shadow-radius: 10px;
`;

export const TimerText = styled.Text`
  font-family: DS-Digital;
  font-size: 140px;
  margin-bottom: 10px;
  color: ${timerColor};
  text-shadow-color: ${timerColor};
  text-shadow-offset: {width: 0px, height: 0px};
  text-shadow-radius: 10px;
`;

export const TimerContainer = styled.View`
  flex: 1;
  background-color: #07121B;
  align-items: center;
  justify-content: center;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export const TimerButton = styled.TouchableOpacity`
  border-width: 5px;
  border-color: white;
  width: ${screen.width / 3}px;
  height: ${screen.width / 3}px;
  border-radius: ${screen.width / 2}px;
  align-items: center;
  justify-content: center;
`;

export const TimerButtonText = styled.Text`
  font-size: 30px;
  color: white;
  border-color: white;
`;