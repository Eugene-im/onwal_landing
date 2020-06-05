cd nettr_landingpage/nettr-landing-react
git pull
rm -rf build
yarn install
npm run build
cd build
static -p 80
echo "ec2-54-213-14-76.us-west-2.compute.amazonaws.com"