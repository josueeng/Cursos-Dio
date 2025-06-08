/**
 * Importa o componente NavigationContainer da biblioteca React Navigation.
 * Este componente é usado para envolver a estrutura de navegação do aplicativo.
 */
import { NavigationContainer } from '@react-navigation/native';

/**
 * Importa a função createNativeStackNavigator da biblioteca React Navigation.
 * Esta função é usada para criar um stack navigator para gerenciar transições entre telas.
 */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**
 * Importa o componente TelaInicial, que representa a tela inicial do aplicativo.
 */
import TelaInicial from '../screens/HomeScreen';

/**
 * Importa o componente TelaSecundaria, que representa a tela secundária do aplicativo.
 */
import TelaSecundaria from '../screens/NavigationScreen';

/**
 * Cria uma instância do stack navigator para definir a estrutura de navegação.
 */
const stack = createNativeStackNavigator();

/**
 * O componente NavegadorDeScreens define a estrutura de navegação do aplicativo.
 * Ele utiliza um stack navigator para gerenciar as transições entre telas.
 *
 * @returns {JSX.Element} O container de navegação com o stack navigator definido.
 */
export default function NavegadorDeScreens() {
    return (
        <NavigationContainer>
            {/* Define o stack navigator e suas telas */}
            <stack.Navigator>
                {/* Adiciona a tela TelaInicial ao stack navigator */}
                <stack.Screen name='TelaInicial' component={TelaInicial} />
                {/* Adiciona a tela TelaSecundaria ao stack navigator */}
                <stack.Screen name='TelaSecundaria' component={TelaSecundaria} />
            </stack.Navigator>
        </NavigationContainer>
    );
}
