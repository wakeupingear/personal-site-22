now=$(date +"%m-%d-%y %T")
echo "Current time : $now"

cd ~/personal-site-22

echo "Pulling site repo"
git fetch --all
git reset --hard
git pull
npm i -f
npm run build

echo "Restarting service"
pm2 restart next
