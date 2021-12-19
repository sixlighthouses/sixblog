---
title: 'screen flickering in linux'
excerpt: 'have you ever had that seizure inducing screen flickering on linux?'
coverImage: '/assets/blog/screen-flickering/screen.jpg'
date: '2021-12-19T05:35:07.322Z'
author:
  name: brendon
  picture: '/assets/main/avatar.png'
ogImage:
  url: '/assets/blog/screen-flickering/screen.jpg'
---

This has happened enough times that I thought I should write it down.  From my extensive (sarcasm) Google research this is caused by a setting on some hardware, PSR stands for Panel Self Refresh and it was turned on by default.  Specifically I have seen it on a Dell Inspiron 14 5400, Dell Latitude 7580 and a Lenovo P50.  They were all Intel based laptops.  If you experience this maddening screen flickering then this may be the issue.  This is the fix I have used consistently across Ubuntu, Pop!_Os, Fedora and Manjaro.

Open the grub config line using your text editor of choice

`sudo nano /etc/default/grub`

edit the line 

`GRUB_CMDLINE_LINUX_DEFAULT="quiet splash”`

add i915.enable_psr=0 in the quotes

`GRUB_CMDLINE_LINUX_DEFAULT="quiet splash i915.enable_psr=0”`

save

`sudo update-grub`

sudo update-grub works on the Ubuntu based distro's on the others I had to use

`sudo grub-mkconfig -o /boot/grub/grub.cfg`

reboot
