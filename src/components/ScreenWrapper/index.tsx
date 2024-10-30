import { SafeAreaView } from 'react-native'

// styles
import { WrapperStyles } from "./styles";


export const ScreenWrapper = ({children}: any) => {
    return (
        <SafeAreaView style={WrapperStyles.container}>
          {children}
        </SafeAreaView>
    )
};
