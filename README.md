#Repo's purpose
This repo illustrates a simple way to get started with regl and typescript.

#How this repo was created
1. ```npm install --save-dev browserify tsify typescript budo```
2. ```npm install --save regl```
3. Create src folder and main index.ts file
4. Add script to package.json to run budo watch server: ```budo src/index.ts -d --live -- -p tsify```
5. Run your budo watch server using ```npm run watch```

That's it!
