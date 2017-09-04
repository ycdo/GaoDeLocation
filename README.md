高德android原生获取本地位置信息

1、添加插件：ionic cordova plugin add https://github.com/ycdo/GaoDeLocation.git --variable API_KEY=your_key

2、your_key需要在高德地图里申请自己android平台的key

3、如何使用：
```
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'; 
## declare let GaoDe:any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ) { }
  
  getPos(){     
    ## GaoDe.getCurrentPosition(function (success) {
      alert(JSON.stringify(success));
    },function (error) {
   	  alert(JSON.stringify(error)); 
    })
  }
}
```
