import { upload } from './chart'
import ora from 'ora'
import firebase from 'firebase/app'
import 'firebase/firestore'
import fbConfig from './fbconfig.json'

firebase.initializeApp(fbConfig)

const uploadSpinner = ora('Uploading...').start()
upload(firebase.firestore().collection('chart'))
  .then(() => uploadSpinner.succeed('Succeed!'))
  .catch(e => uploadSpinner.fail(e))
