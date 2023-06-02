import { Image, Text, Box, Link, VStack } from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';

export default function Login({ navigation }) {
	return (
		<VStack flex={1} alignItems="center"
			justifyContent="center" p={5}>
			<Image source={Logo} alt="Logo Voll" />
			<Titulo>
				Faça login em sua conta
			</Titulo>

			<Box>
				<EntradaTexto
					label="Email"
					placeholder="Insira seu endereço de e-mail"
				/>

				<EntradaTexto
					label="Senha"
					placeholder="Insira sua senha"
				/>
			</Box>

			<Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

			<Link mt={2}>
				Esqueceu sua senha ?
			</Link>

			<Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
				<Text>Ainda não tem cadastro ?</Text>

				<TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
					<Text color="blue.500">
						Faça seu cadastro!
					</Text>
				</TouchableOpacity>
			</Box>
		</VStack>
	);
}