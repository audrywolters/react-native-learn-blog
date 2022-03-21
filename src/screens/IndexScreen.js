import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const IndexScreen = () => {
	const { state, addBlogPost } = useContext(Context)

	return (
		<View>
			<TouchableOpacity style={styles.button} onPress={addBlogPost}>
				<Text style={styles.buttonText}>Add Post</Text>
			</TouchableOpacity>
			{/* onPress={() => addBlogPost()}/> */}
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return (
						<View style={styles.row}>
							<Text style={styles.title}>{item.title}</Text>
							<Feather style={styles.icon} name="trash-2" />
						</View>
					)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 8,
		backgroundColor: 'black',
		height: 50
	},
	buttonText: {
		fontSize: 18,
		color: 'white'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
		marginHorizontal: 8,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderWidth: 2,
		borderColor: 'darkgray'
	},
	title: {
		fontSize: 18
	},
	icon: {
		fontSize: 24
	}
})

export default IndexScreen
