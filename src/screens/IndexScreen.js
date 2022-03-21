import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {
	const { state, addBlogPost } = useContext(Context)

	return (
		<View>
												{/* onPress={() => addBlogPost()}/> */}
			<TouchableOpacity style={styles.button} onPress={addBlogPost}>
				<Text style={styles.buttonText}>Add Post</Text>
			</TouchableOpacity>
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return (
						<View style={styles.row}>
							<Text style={styles.title}>{item.title} - {item.id}</Text>
							<TouchableOpacity onPress={() => console.log(item.id)}>
								<Feather style={styles.icon} name="trash-2" />
							</TouchableOpacity>
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
		height: 55
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
		paddingVertical: 15,
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
