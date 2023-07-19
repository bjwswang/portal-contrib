# portal-contrib
Shared tools and configuration for kubebb portal.

- [less 变量](less/README.md)
- [menu-generator 菜单生成工具](menu-generator/README.md)

## 如何使用

> [关于 git submodule](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97)

```bash
# add submodule to track main
git submodule add -b main https://github.com/kubebb/portal-contrib.git
# update your submodule
git submodule update --remote
```
注意需要指定分支，一般要与当前 portal 分支保持一致

## 如何更新

当 portal-contrib 有更新时，需要在引用 portal-contrib 的 portal 执行以下命令进行更新：
```bash
# update your submodule
git submodule update --remote
# add change
git add portal-contrib
# commit change
git commit -m "chore: update portal-contrib"
```
