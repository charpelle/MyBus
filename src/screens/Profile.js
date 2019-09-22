import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import firebase from '../config/fbConfig'

class Profile extends React.Component {
	handleSignout = () => {
		firebase.auth().signOut()
		this.props.navigation.navigate('Login')
    }
    
    componentDidMount() {
        this.getData()
    }
    
    getData = () => {
        newCourse.forEach(function(obj) {
            firebase.firestore().collection("courses").add({
                title: obj.title,
                subtitle: obj.subtitle,
                image: obj.image,
                logo: obj.logo,
                author: obj.author,
                avatar: obj.avatar,
                caption: obj.caption
            }).then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        });
    }

	render() {
		return (
			<View style={styles.container}>
				<Text>Profile Screen</Text>
				<Text>{this.props.user.email}</Text>
				<Button title='Logout' onPress={this.handleSignout} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Profile)

const newCourse = [
    {
      title: "Prototype in InVision Studio",
      subtitle: "10 sections",
      image: 'https://firebasestorage.googleapis.com/v0/b/net-ninjs-marioplan-101.appspot.com/o/background13.jpg?alt=media&token=744c54ad-863a-4158-96a9-fcdc1e36a996',
      logo: 'https://firebasestorage.googleapis.com/v0/b/net-ninjs-marioplan-101.appspot.com/o/logo-studio.png?alt=media&token=18db0564-ec0c-4a93-8056-dfe65f701486',
      author: "Meng To",
      avatar: 'https://firebasestorage.googleapis.com/v0/b/net-ninjs-marioplan-101.appspot.com/o/avatar.jpg?alt=media&token=4479220e-44a8-4e11-a2af-afa4b62cf83f',
      caption: "Design and interactive prototype"
    }
  ]