import { VStack, Text, Divider, ScrollView } from "native-base"
import { CardConsulta } from "../components/CardConsulta"
import { Titulo } from "../components/Titulo"
import { Botao } from "../components/Botao"

export default function Consultas() {
	return (
		<ScrollView p={5}>
			<Titulo color="blue.500" mb={5}>
				Minhas Consultas
			</Titulo>

			<Botao mb={5} mt={5}>Agendar novas consultas</Botao>

			<Titulo color="blue.500" mb={5} fontSize="lg" alignSelf="flex-start">
				Próximas Consultas
			</Titulo>

			<CardConsulta
				nome="Dr. Andre"
				especialidade="Cardiologista"
				foto=""
				foiAgendado
			/>

			<Divider mt={5} />

			<Titulo color="blue.500" mb={5} fontSize="lg" alignSelf="flex-start">
				Consultas Passadas
			</Titulo>

			<CardConsulta
				nome="Dr. Rafael"
				especialidade="Cardiologista"
				foto=""
				foiAtendido
			/>

			<CardConsulta
				nome="Dra. Silvana"
				especialidade="Dentista"
				foto=""
				foiAtendido
			/>

			<CardConsulta
				nome="Dra. Maria"
				especialidade="Pediatra"
				foto=""
				foiAtendido
			/>
		</ScrollView>
	)
}