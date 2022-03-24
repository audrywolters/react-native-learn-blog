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
				// why does 'title' on its own, work instead of blogPost.title?
				editBlogPost(id, title, content)
				// i guess because BlogPostForm will know what it is ... i think
				//
				// 'blogPost.title' is the old data
				// 'title' is the new data hidden inside BlogPostForm
			}
		/>
	)
}

const styles = StyleSheet.create({})

export default EditScreen
