learn some commands:

```shell
# checking sync log
brctl log -w 

# digest command tool
fileproviderctl check -v
fileproviderctl repair -v

# remove empty file if having issues in fileprovider checking
find . -type f -empty -exec rm -v {} \;
```

the most helpful discussion to fix this issue ->

https://answers.microsoft.com/en-us/officeinsider/forum/all/onedrive-causes-extended-fileproviderd-cpu/61a15ebe-510c-4a0e-8847-3bce0b5a5059?page=5

besides an article in sspar.com help me a lot.

https://sspai.com/post/72882

you can check the folder `/Library/Application Support/FileProvider/` for more details
