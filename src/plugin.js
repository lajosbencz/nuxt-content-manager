
import 'reflect-metadata'

const options = JSON.parse('<%= JSON.stringify(options) %>')
const { namespace } = options

// import ContentEditable from './content-editable'

export default function ({app}, inject) {
  inject('contentManager', function() {
    console.log('contentManager')
  });
  // app.component('content-editable', ContentEditable)
}
