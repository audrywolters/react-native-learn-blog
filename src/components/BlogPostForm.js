import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const BlogPostForm = () => {
	// have state for just this view. text inputs need help like that.
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	return (
		<View style={styles.parent}>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput
				style={[styles.input, styles.contentInput]}
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					// add data to store
					console.log(`add ${title} and ${content} to store. love, BlogPostForm`)

				}}
			>
				<Text style={styles.buttonText}>Save Blog Post</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	parent: {
		flex: 1,
		margin: 8
	},
	label: {
		fontSize: 18,
		marginBottom: 5
	},
	input: {
		fontSize: 16,
		marginBottom: 20,
		padding: 5,
		height: 40,
		borderWidth: 1,
		borderColor: 'black'
	},
	contentInput: {
		height: 500
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
		height: 55
	},
	buttonText: {
		fontSize: 18,
		color: 'white'
	}
})

export default BlogPostForm
