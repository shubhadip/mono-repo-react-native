# mono-repo-react-native
ReactNative and ReactNativeWeb MonoRepo

\
\
## code sharing between Web, iOS and Android
\
\

**Technology Used:**\
[React](https://reactjs.org/)\
[React Native](https://facebook.github.io/react-native/)\
[React Native Web](https://github.com/necolas/react-native-web)\
[Lerna](https://github.com/lerna/lerna)\

\
\
**To Run the Project:**\
Please follow below mentioned step to run this project:

- Clone the repo
```shell##
https://github.com/shubhadip/mono-repo-react-native
```
- run **yarn** in root folder

#### To Run Web Version
- Run `yarn webdev` in root folder.

#### To Run Android Version
- Run `yarn webdev` in root folder.

#### To Update Common LibraryCode
- Run `yarn libdev` in root folder.

### To update library code and develop your web version
- Run `yarn libdev` and `yarn webdev` this is make sure your changes are reflected in realtime when you change code in library

### To update library code and develop your android version
- Run `yarn libdev` and `yarn androiddev` this is make sure your changes are reflected in realtime when you change code in library

> to develop android code we have to make a symlink from library to android folder.

`npm install -g wml`.
`wml add ./packages/common ./packages/nativeapp/node_modules/monoreactrepo`.

> now you will updated code everytime you change something in library code.

## To Import Library
- `import { YourComponent } from 'monoreactrepo'`
