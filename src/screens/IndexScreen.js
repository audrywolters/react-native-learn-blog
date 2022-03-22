import React, { useContext } from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity
} from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
	const { state, addBlogPost, deleteBlogPost } = useContext(Context)

	return (
		<View>
			{/* onPress={() => addBlogPost()}/> */}
			<TouchableOpacity style={styles.button} onPress={addBlogPost}>
				<Text style={styles.buttonText}>Add Post</Text>
			</TouchableOpacity>
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate('Show', { id: item.id })}
						>
							<View style={styles.row}>
								<Text style={styles.title}>
									{item.title} - {item.id}
								</Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
									<Feather style={styles.icon} name="trash-2" />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					)
				}}
			/>
		</View>
	)
}

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<Entypo style={styles.createButton} name="circle-with-plus" size={35} />
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	createButton: {
		marginRight: 15
	},
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
		fontSize: 28
	}
})

export default IndexScreen
