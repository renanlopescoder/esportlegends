import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#bdc3c7',
    width: 170,
    textAlign: 'center',
    opacity: 0.9,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, .1)',
    marginBottom: 20,
    color: '#fff',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: '#303f9f',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#fff',
  }
})

export default styles
