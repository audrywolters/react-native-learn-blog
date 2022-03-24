import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
	const id = navigation.getParam('id');
	const { state, editBlogPost } = useContext(Context)
	const blogPost = state.find((bP) => bP.id === id)

	return (
		<BlogPostForm
			initialValues={{ title: blogPost.title, content: blogPost.content }}
			onSubmit={(title, content) =>
				// why does 'title' etc. on its own work instead of blogPost.title?
				editBlogPost(id, title, content)
			}
		/>
	)
}

const styles = StyleSheet.create({})

export default EditScreen
