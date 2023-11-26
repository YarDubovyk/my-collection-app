import {Pressable, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  children: string;
  type?: string;
  onPress?(): void;
}

const Button = ({children, type, onPress}: ButtonProps): JSX.Element => {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    borderRadius: 12,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});
