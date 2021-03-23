_tsc_completions()
{
  local reply
  local si=$IFS
  IFS=$'
' reply=($(COMP_CWORD="$((CURRENT-1))" COMP_LINE="$BUFFER" COMP_POINT="$CURSOR" "$_tsc_completion_dir"/tsc-completion.js tsc "${words[@]}"))
  IFS=$si
  _describe 'values' reply
}
compdef _tsc_completions tsc
