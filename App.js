import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
//
import { Provider } from './src/context/BlogContext'
// if we add another file for a new context, we can do it like this:
// import { Context as BlogProvider } from '../context/BlogContext'
// import { Context as LikesProvider } from '../context/LikesContext'
//
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

const navigator = createStackNavigator(
	{
		Index: IndexScreen,
		Show: ShowScreen,
		Create: CreateScreen,
		Edit: EditScreen
	},
	{
		initialRouteName: 'Index',
		defaultNavigationOptions: {
			title: 'Blogs'
		}
	}
)

const App = createAppContainer(navigator)

export default () => {
	return (
		<Provider>
			<App />
		</Provider>
	)
}

// if using more than 1 Context/Providers
// export default () => {
// 	return (
// 		<BlogProvider>
// 			<LikesProvider>
// 				<App />
// 			</LikesProvider>
// 		</BlogProvider>
// 	)
// }
