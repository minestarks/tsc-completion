#!/usr/bin/env bash

echo complete -C `pwd`/tsc-completion.js tsc >> ~/.bashrc && echo completion spec added to ~/.bashrc || echo could not add completion to ~/.bashrc

echo _tsc_completion_dir=`pwd` >> ~/.zshrc && echo source `pwd`/zsh >> ~/.zshrc && echo completion spec added to ~/.zshrc || echo could not add completion to ~/.zshrc