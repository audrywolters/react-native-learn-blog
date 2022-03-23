import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
	const { state } = useContext(Context)
	const blogPost = state.find((bP) => bP.id === navigation.getParam('id'))

	return (
		<BlogPostForm />
	)
}

const styles = StyleSheet.create({})

export default EditScreen
