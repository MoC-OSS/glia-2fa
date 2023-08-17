echo "" > output.txt
cd verify-service
twilio serverless:deploy >> ../output.txt
cd ..
node update_routes.js
cd client
yarn build
cd build/static/media
for i in *.png
do
    mv "$i" "`echo $i | sed 's/@//'`"
done
cd ../../..
cp -r build/static/media/ ../verify-service/assets/media/
cp build/index.html  ../verify-service/assets/
cd ../verify-service
echo "" > ../output.txt
twilio serverless:deploy >> ../output.txt