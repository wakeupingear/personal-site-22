now=$(date +"%m-%d-%y %T")
echo "Current time : $now"

cd ~/personal-site-22

export NODE_OPTIONS="--max-old-space-size=8192"

echo "Pulling site repo"
git fetch --all
git reset --hard
git pull
npm i -f
npm install -f --save-dev typescript
npm run build

echo "Restarting service"
pm2 restart next
