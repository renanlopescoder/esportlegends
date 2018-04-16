import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  container: {
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
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: 'rgba(67, 160, 71, 1)',
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#fff',
  }
})

export default styles
