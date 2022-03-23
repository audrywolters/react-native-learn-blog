import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context)

	const blogPost = state.find((bP) => bP.id === navigation.getParam('id'))

	return (
		<View>
			<Text>{blogPost.title}</Text>
			<Text>{blogPost.content}</Text>
		</View>
	)
}

ShowScreen.navigationOptions = () => {
	return {
		headerRight: () => (
			<TouchableOpacity>
				<FontAwesome style={styles.editButton} name="pencil" />
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	editButton: {
		fontSize: 32,
		marginRight: 25
	},
})

export default ShowScreen
