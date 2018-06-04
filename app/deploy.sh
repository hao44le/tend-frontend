npm run build
cp -r client/css dist/
cp -r client/fonts dist/
cp -r client/images dist/
cp -r client/js dist/
firebase deploy
