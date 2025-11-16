import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { styles } from './styles';

type ButtonProps = {
    title: string;
} & TouchableOpacityProps;

export function Button({ title, ...rest }: ButtonProps & TouchableOpacityProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}