import {View, Text, Image, StyleSheet} from 'react-native';
import Button from '../components/ui/button';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = (): JSX.Element => {
  return (
    <LinearGradient>
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../assets/images/welcome-image.jpg')}
            resizeMethod="resize"
          />
        </View>
        <Text>Welcome</Text>
        <View>
          <Button>Login</Button>
          <Button>Join</Button>
        </View>
      </View>
    </LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  imageWrapper: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
