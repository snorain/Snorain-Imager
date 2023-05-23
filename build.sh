#!/bin/bash

#Vars:
buildmode="deb"

#Get mode:
if [ ! -z "$1" ]; then
  if [ "$1" == "deb" ]; then
    buildmode="deb"
  elif [ "$1" == "imager" ]; then
    buildmode="make"
  fi
fi

#Main:
if [ "$buildmode" == "deb" ]; then
  echo "Building .deb"
  debuild -uc -us
elif [ "$buildmode" == "make" ]; then
  echo "Building imager only"
  if [ ! -d "build" ]; then
    mkdir -p "build"
  fi
  cd build
  if [ -d "CMakeFiles" ]; then
    rm -r CMakeFiles
  fi
  echo "Configuring build"
  cmake ../src
  echo "Building"
  make
  cd ..
else
  echo "Unkown build option: $1, valid options are: deb, imager"
  exit 1
fi
