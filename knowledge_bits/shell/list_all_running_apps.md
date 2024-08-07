ps ux -p $(osascript -e tell application System Events to return unix id of processes whose background only is false)
