# dsh-hello

最小的 **DeepSeek Harness（DSH）组合包（bundle）** 示例。它不是普通的 npm 包：DSH 只把 `package.json` 中声明了 `dsh.bundle.patch` 的包当作可安装的插件（profile 层），否则会在安装后拒绝并回滚。

## 文件结构

| 文件 | 作用 |
| --- | --- |
| `package.json` | 组合包清单：`name` 必须全小写；`dsh.bundle.patch` 指向补丁文件；`exports`/`files` 暴露入口、语言包与图标 |
| `cordis.patch.yml` | 组合包的配置层：用 `insert` 把本包作为 Loader 条目插入 profile |
| `index.js` | Host 插件入口，`exports` 的 `"."` 指向它，必须导出 `apply(ctx, config)` 或默认导出一个服务类 |
| `locale/en.json`、`locale/zh.json` | 插件管理器读取的显示名与描述（`meta.title`、`meta.description`） |
| `icon.svg` | 插件列表中显示的图标（≤ 256 KiB） |

## 安装

在 DSH 的插件页面添加本仓库地址：

```
https://github.com/burning-lemon/DSH
```

加载成功后，插件列表会出现 **DSH Hello / DSH 示例插件**，控制台输出一条 `[dsh-hello] plugin loaded`。

## 注意

- 包名必须是全小写（npm 与 DSH 的包名校验都要求），因此仓库名 `DSH` 不能直接当包名使用。
- `cordis.patch.yml` 中 `insert[].name` 必须与 `package.json` 的 `name` 完全一致，否则 Loader 找不到该模块。
- 如果在别处修改了包名，三处要一起改：`package.json` 的 `name`、`cordis.patch.yml` 的 `name`，以及本说明中的文字。
