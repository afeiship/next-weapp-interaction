# next-weapp-interaction
> Weapp interaction like modal/actionsheet/toast/loading

## apis:
- https://developers.weixin.qq.com/miniprogram/dev/api/wx.showActionSheet.html

| api     | wx                      | description         | wx            |
|---------|-------------------------|---------------------|---------------|
| actions | showActionSheet         | 显示操作菜单        | options       |
| alert   | showModal               | 显示 Modal          | options       |
| confirm | showModal               | 显示 confirm        | options       |
| modal   | showModal               | 显示 alert          | value,options |
| loading | showLoading/hideLoading | 显示 loading 提示框 | value,options |
| toast   | showToast/hideToast     | 显示消息提示框      | value,options |

## response:
> A promise instance.

| code | data           | status  |
|------|----------------|---------|
| 1    | weapp response | fail    |
| 0    | weapp response | success |

## usage:
```js
import NxWeappInteraction from 'next-weapp-interaction';

const WeappInteraction = nx.declare({
  extends: NxWeappInteraction,
  methods: {
    init() {
      ['actions', 'alert', 'confirm', 'modal', 'loading', 'toast'].forEach((item) => {
        nx.set(nx, `wx.${item}`, this[item]);
      });
    }
  }
});

export default WeappInteraction.getInstance();
```
