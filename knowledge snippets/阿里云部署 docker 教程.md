# 阿里云部署 docker 教程

[installing docker in ubuntu](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

after installing docker, you can use the following command to check the version of docker

```bash
docker --version #检查docker 是否安装成功
```

```bash
sudo systemctl start docker     #运行Docker守护进程
sudo systemctl stop docker      #停止Docker守护进程
sudo systemctl restart docker   #重启Docker守护进程
sudo systemctl enable docker    #设置Docker开机自启动
sudo systemctl status docker    #查看Docker的运行状态
```