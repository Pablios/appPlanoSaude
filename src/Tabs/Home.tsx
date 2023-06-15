import { VStack, Text, ScrollView, Avatar, Divider, Box } from "native-base"
import { EntradaTexto } from "../components/EntradaTexto"

export default function Home() {
	return (
		<ScrollView>
			<VStack>
				<Box>
					<EntradaTexto
						label='teste'
						placeholder='teste'
					/>
				</Box>
			</VStack>
		</ScrollView>
	)
}