import React, { useContext } from 'react'
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity
} from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {

	// hook up context for all app to share
	const { addBlogPost } = useContext(Context)

	return (
		<BlogPostForm />
	)
	
}

const styles = StyleSheet.create({})

export default CreateScreen
