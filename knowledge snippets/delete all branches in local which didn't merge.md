```
git branch --no-merged | grep -v "\*" | xargs git branch -D
```