cd ~
mkdir -p IconBuddy
cd ~/IconBuddy
for i in *.icns; do
    [ -f "$i" ] || break
    filename="${i%.*}"
    ICNSname=$(/usr/libexec/PlistBuddy -c "Print :CFBundleIconFile" "/Applications/${filename}.app/Contents/Info.plist")
    if ! [[ "$ICNSname" == *".icns"* ]]; then
        ICNSname="${ICNSname}.icns"
    fi
    cp "$i" "/Applications/${filename}.app/Contents/Resources/${ICNSname}"
    touch "/Applications/${filename}.app"
    echo "✅ Changed icon for ${filename}"
done
