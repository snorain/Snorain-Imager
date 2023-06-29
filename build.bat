@echo off

set CMAKE_PREFIX_PATH=C:\Qt\Qt5.14.2\5.14.2\mingw73_32
set CMAKE_MAKE_PROGRAM=C:\ProgramData\chocolatey\bin\make.exe
set OPENSSL_ROOT_DIR=C:\dev-lib\openssl

cd build

cmake -G "MinGW Makefiles" ..\src

make

cd ..