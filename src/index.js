
import path from 'path'
import fs from 'fs'

const defaultOptions = {
  urlPrefix: '/nuxt-content-manager',
  dbFile: 'nuxt-cms.db',
  namespace: 'contentManager',
};

export default function ContentManagerModule(moduleOptions) {
  const options = Object.assign({}, defaultOptions, moduleOptions);
  const { namespace } = options
  // const foldersToSync = ['api', 'api/entity', 'api/migration', 'api/routes']
  // for (const pathString of foldersToSync) {
  //   const readPath = path.resolve(__dirname, pathString)
  //   for (const file of fs.readdirSync(readPath)) {
  //     const fullPath = path.resolve(readPath, file);
  //     if(fs.lstatSync(fullPath).isDirectory()) {
  //       continue;
  //     }
  //     console.log('adding template file:', file);
  //     this.addTemplate({
  //       src: fullPath,
  //       fileName: path.join(namespace, pathString, file),
  //       options
  //     })
  //   }
  // }
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: path.join(namespace, 'plugin.js'),
    options
  })
  this.addServerMiddleware({
    path: options.urlPrefix,
    // handler: path.join(this.options.buildDir, namespace, 'api', 'index.js'),
    handler: 'nuxt-content-manager/src/api/index.js',
  })
  console.log('CMS url prefix:', options.urlPrefix);
}

import meta from '../package.json'
export {
  meta
}
