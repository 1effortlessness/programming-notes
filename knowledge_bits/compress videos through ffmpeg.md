install: `brew install ffmpeg`

compress video:
```bash
ffmpeg -i input_video.mp4 -vcodec libx264 -crf 28 output_compressed.mp4
```
Here's what the different options in the command mean:

- -i input_video.mp4: Specifies the input video file.
- -vcodec libx264: Sets the video codec to H.264 (libx264), which is a widely supported and efficient codec for video compression.
- -crf 28: Sets the Constant Rate Factor (CRF) value to 28. The CRF value controls the quality and compression ratio of the output video. Lower values (e.g., 18-23) will result in better quality but larger file sizes, while higher values (e.g., 28-35) will produce smaller file sizes but lower quality. The value of 28 is a good balance between quality and file size for most cases.

script to compress:

```shell
#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: $0 <input_video_file>"
    exit 1
fi

input_file="$1"
output_file="${input_file%.*}_compressed.mp4"

ffmpeg -i "$input_file" -vcodec libx264 -crf 28 "$output_file"

echo "Compressed video saved to: $output_file"
```