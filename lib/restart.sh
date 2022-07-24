now=$(date +"%T")
echo "Current time : $now"

cd ~/personal-site-22

echo "Pulling site repo"
git pull
npm i -f
npm run build

echo "Restarting service"
pm2 restart next
