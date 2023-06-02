import { Image, Text, Checkbox, Box, ScrollView } from 'native-base'
import Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';
import { useState } from 'react';
import { secoes } from './utils/cadastroEntradaTexto';

export default function Cadastro() {
	const [numSecao, setNumSecao] = useState(0);

	function avancarSecao() {
		if (numSecao < secoes.length - 1) {
			setNumSecao(numSecao + 1)
		}
	}

	function voltarSecao() {
		if (numSecao > 0) {
			setNumSecao(numSecao - 1)
		}
	}

	return (
		<ScrollView flex={1} p={5}>
			<Image source={Logo} alt="Logo Voll" alignSelf="center" />
			<Titulo>
				{secoes[numSecao].titulo}
			</Titulo>

			<Box>
				{
					secoes[numSecao]?.entradaTexto.map(entrada => {
						return <EntradaTexto
							label={entrada.label}
							placeholder={entrada.placeholder}
							key={entrada.id}
						/>
					})
				}
			</Box>

			<Box>
				<Text color="blue.800" fontWeight="bold" fontSize="md" mt={2} mb={4}>
					Selecione o plano:
				</Text>
				{
					secoes[numSecao].checkbox.map(check => {
						return <Checkbox
							value={check.value}
							key={check.id}>
							{check.value}
						</Checkbox>
					})
				}
			</Box>

			{numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor='gray.400'>Voltar</Botao>}
			<Botao onPress={() => avancarSecao()} mt={4} mb={20}>Avançar</Botao>
		</ScrollView>
	);
}