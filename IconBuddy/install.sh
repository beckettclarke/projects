#!/bin/bash
mkdir -p ~/.foxcmd &> /dev/null
chmod a+w ~/.foxcmd
zshdir="$HOME/.zshrc"
if grep -s "export PATH=\"\$PATH:\$HOME/.foxcmd\"" &> /dev/null "$zshdir"; then
    echo -n -e "${color_green}"
else
    echo -e "export PATH=\"\$PATH:\$HOME/.foxcmd\"" >> .zshrc
fi
bashdir="$HOME/.bashrc"
if grep -s "export PATH=\"\$PATH:\$HOME/.foxcmd\"" &> /dev/null "$bashdir"; then
    echo -n -e "${color_green}"
else
    echo -e "export PATH=\"\$PATH:\$HOME/.foxcmd\"" >> .bashrc
fi
curl -fsSL "https://raw.githubusercontent.com/ItsFoxDev/IconBuddy/main/iconbuddy.sh" -o $HOME/.foxcmd/iconbuddy
chmod 755 $HOME/.foxcmd/iconbuddy