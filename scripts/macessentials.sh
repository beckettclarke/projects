if [ ! -d "/usr/local/bin" ]; then 
    echo "🔑 You may be asked to enter your password"
    sudo mkdir /usr/local/bin
fi
echo "🦊 Installing FoxCMD..."
curl -fsSL "https://raw.githubusercontent.com/ItsFoxDev/FoxCMD/main/fox.sh" -o /usr/local/bin/fox
chmod +x /usr/local/bin/fox
echo "🍺 Installing Homebrew..."
fox install brew -c
echo "🎥 Installing FFmpeg..."
fox install ffmpeg -c
echo "🦊 Downloading Firefox..."
curl https://ftp.mozilla.org/pub/firefox/releases/99.0/mac/en-US/Firefox%2099.0.pkg -o ~/firefox.pkg -#
sudo installer -pkg '~/firefox.pkg' -target /
rm ~/firefox.pkg
echo "🌙 Downloading Lunar Client..."
curl "https://launcherupdates.lunarclientcdn.com/Lunar%20Client%20v2.10.1.dmg" -o ~/lunar.dmg -#
yes | hdiutil attach lunar.dmg -nobrowse > /dev/null
sudo cp -R /Volumes/Lunar\ Client/Lunar\ Client.app /Applications/Lunar\ Client.app
hdiutil unmount /Volumes/Lunar\ Client/
rm ~/lunar.dmg
echo "💬 Downloading Discord..."
curl https://dl.discordapp.net/apps/osx/0.0.266/Discord.dmg -o discord.dmg -#
yes | hdiutil attach discord.dmg -nobrowse > /dev/null -noautoopen
cp -R /Volumes/Discord/Discord.app /Applications/Discord.app
hdiutil unmount /Volumes/Discord/
rm ~/discord.dmg
https://cdn.cloudflare.steamstatic.com/client/installer/steam.dmg
echo "💨 Downloading Steam..."
curl https://cdn.cloudflare.steamstatic.com/client/installer/steam.dmg -o steam.dmg -#
yes | hdiutil attach steam.dmg -nobrowse > /dev/null -noautoopen
cp -R /Volumes/Steam/Steam.app /Applications/Steam.app
hdiutil unmount /Volumes/Steam/
rm ~/steam.dmg
