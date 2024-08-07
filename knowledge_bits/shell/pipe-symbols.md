1. `|` (Pipe):
   - Connects the output of one command to the input of another
   - Example: `ls | grep .txt`
   - This lists files and pipes the result to grep to find .txt files

2. `<` (Input redirection):
   - Sends file contents as input to a command
   - Example: `sort < names.txt`
   - This sorts the contents of names.txt

3. `>` (Output redirection):
   - Sends command output to a file (overwrites existing content)
   - Example: `echo "Hello" > greeting.txt`
   - This writes "Hello" to greeting.txt

4. `<<` (Here document):
   - Allows multi-line input to a command
   - Example:
     ```
     cat << EOF
     Line 1
     Line 2
     EOF
     ```
   - This sends multiple lines to the cat command

5. `>>` (Append output redirection):
   - Adds command output to the end of a file
   - Example: `echo "World" >> greeting.txt`
   - This appends "World" to greeting.txt