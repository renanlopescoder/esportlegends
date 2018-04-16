import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'

export default props => <Spinner visible={props.loading} overlayColor={'rgba(0,0,0,0.5)'} textStyle={{color: '#FFF'}} />
