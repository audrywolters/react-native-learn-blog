import React, { useContext, useEffect } from 'react'
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
	const { state, deleteBlogPost, getBlogPostList } = useContext(Context)

	useEffect(() => {
		getBlogPostList()
	}, [])


	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate('Show', { id: item.id })}
						>
							<View style={[styles.parent, styles.row]}>
								<Text style={styles.title}>
									{item.title}
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
				<Entypo style={styles.createButton} name="circle-with-plus" />
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	parent: {
		flex: 1,
		marginHorizontal: 5,
		marginTop: 5
	},
	createButton: {
		fontSize: 32,
		marginRight: 25
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
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
