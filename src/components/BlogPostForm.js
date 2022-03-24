import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const BlogPostForm = ({ initialValues, onSubmit }) => {
	// Create doesn't send anything. look to defaultProps for empty strings.
	const [title, setTitle] = useState(initialValues.title)
	const [content, setContent] = useState(initialValues.content)

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
				// getting 'onSubmit' from some Parent === (Create || Edit)
				// this (BlogPostForm) is told by Parent to send 
				// title and content to 'onSubmit'
				// whichever Parent told this (BlogPostForm) to send data
				// has also sent a callback to the store
				// but worry about that in the Parent
				onPress={() => onSubmit(title, content)}
			>
				<Text style={styles.buttonText}>Save Blog Post</Text>
			</TouchableOpacity>
		</View>
	)
}

// i don't like this
// we should just send empty strings from the Parent that doesn't want any data
BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: ''
	}
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
