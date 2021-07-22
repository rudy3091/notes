#!/bin/sh

ghc -c -O Add.hs

ghc --make -no-hs-main -optc-O main.c Add -o a.out

rm Add.hi Add.o Add_stub.h main.o
