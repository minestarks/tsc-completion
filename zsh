#!/usr/bin/env zsh
_tsc_completions()
{
  local reply
  local si=$IFS
  IFS=$'
' reply=($(COMP_CWORD="$((CURRENT-1))" COMP_LINE="$BUFFER" COMP_POINT="$CURSOR" "$(cd "$(dirname "$0")" && pwd)"/../tsc-completion.js tsc "${words[@]}"))
  IFS=$si
  _describe 'values' reply
}
compdef _tsc_completions tsc
