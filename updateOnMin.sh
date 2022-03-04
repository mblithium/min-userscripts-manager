#!/usr/bin/env bash

minScriptsDir="$HOME/.config/Min"
workDir="$(pwd)"

echo "Userscript directory: $minScriptsDir"

# Checks if the userscripts directory is created.
if [[ ! -d $minScriptsDir/userscripts ]]; then
    echo 'Directory "userscripts" does not exist, creating...'
    mkdir $minScriptsDir/userscripts
fi

function updateOnMin() {
    echo $workDir

    local mvusm="$minScriptsDir/userscripts/min-virtual-userscript-manager.js"

    if [[ -f $mvusm ]]; then
        rm $mvusm
    fi

    cp "$workDir/min-virtual-userscript-manager.js" $mvusm

}

function restartMin() {
    pkill min
    exec min -c
}

updateOnMin
restartMin