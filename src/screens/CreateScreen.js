import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
	// hook up context for all app to share
	const { addBlogPost } = useContext(Context)

	return (
		<BlogPostForm
			// pass this function (it's from Context store) to BlogPostForm
			onSubmit={(title, content) => {
				addBlogPost(title, content, () => navigation.navigate('Index'))
			}}
		/>
	)
}

const styles = StyleSheet.create({})

export default CreateScreen
