import { Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { ScreenWrapper } from "../../components/ScreenWrapper";
import { SCREENS } from '../../constants/screenNames';


export const TrainingScreen = (props: any) => {
  const { navigation } = props;
  const goToRoutine = () => navigation.navigate(SCREENS.TRAINING.ROUTINE);

    return (
      <ScreenWrapper>
        <View>
          <Text>Training Screen</Text>
          <Button
            title="PROFILE"
              icon={{
                name: 'user',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              onPress={goToRoutine}
              iconRight
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(199, 43, 98, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
          />
        </View>
      </ScreenWrapper>
    )
};
