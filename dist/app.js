!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="/",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();__webpack_require__(15),window.FastClick&&FastClick.attach(document.body);var _ReactRouter=ReactRouter,Router=_ReactRouter.Router,Route=_ReactRouter.Route,IndexRoute=_ReactRouter.IndexRoute,hashHistory=(_ReactRouter.Link,_ReactRouter.hashHistory),PageHome=__webpack_require__(11),PageDemo=__webpack_require__(8),PageTest=__webpack_require__(13),App=function(_React$Component){function App(){return _classCallCheck(this,App),_possibleConstructorReturn(this,Object.getPrototypeOf(App).apply(this,arguments))}return _inherits(App,_React$Component),_createClass(App,[{key:"render",value:function(){return React.createElement("div",null,this.props.children)}}]),App}(React.Component);ReactDOM.render(React.createElement(Router,{history:hashHistory},React.createElement(Route,{name:"app",path:"/",component:App},React.createElement(IndexRoute,{component:PageHome}),React.createElement(Route,{path:"home",component:PageHome}),React.createElement(Route,{path:"demo",component:PageDemo}),React.createElement(Route,{path:"test",component:PageTest}))),document.getElementById("App"))},function(module,exports,__webpack_require__){function setDefaultProps(reactMixin){var getDefaultProps=reactMixin.getDefaultProps;getDefaultProps&&(reactMixin.defaultProps=getDefaultProps(),delete reactMixin.getDefaultProps)}function setInitialState(reactMixin){function applyInitialState(instance){var state=instance.state||{};assign(state,getInitialState.call(instance)),instance.state=state}var getInitialState=reactMixin.getInitialState,componentWillMount=reactMixin.componentWillMount;getInitialState&&(componentWillMount?reactMixin.componentWillMount=function(){applyInitialState(this),componentWillMount.call(this)}:reactMixin.componentWillMount=function(){applyInitialState(this)},delete reactMixin.getInitialState)}function mixinClass(reactClass,reactMixin){setDefaultProps(reactMixin),setInitialState(reactMixin);var prototypeMethods={},staticProps={};Object.keys(reactMixin).forEach(function(key){"mixins"!==key&&"statics"!==key&&("function"==typeof reactMixin[key]?prototypeMethods[key]=reactMixin[key]:staticProps[key]=reactMixin[key])}),mixinProto(reactClass.prototype,prototypeMethods);var mergePropTypes=function(left,right,key){if(!left)return right;if(!right)return left;var result={};return Object.keys(left).forEach(function(leftKey){right[leftKey]||(result[leftKey]=left[leftKey])}),Object.keys(right).forEach(function(rightKey){left[rightKey]?result[rightKey]=function(){return right[rightKey].apply(this,arguments)&&left[rightKey].apply(this,arguments)}:result[rightKey]=right[rightKey]}),result};return mixin({childContextTypes:mergePropTypes,contextTypes:mergePropTypes,propTypes:mixin.MANY_MERGED_LOOSE,defaultProps:mixin.MANY_MERGED_LOOSE})(reactClass,staticProps),reactMixin.statics&&Object.getOwnPropertyNames(reactMixin.statics).forEach(function(key){var left=reactClass[key],right=reactMixin.statics[key];if(void 0!==left&&void 0!==right)throw new TypeError("Cannot mixin statics because statics."+key+" and Component."+key+" are defined.");reactClass[key]=void 0!==left?left:right}),reactMixin.mixins&&reactMixin.mixins.reverse().forEach(mixinClass.bind(null,reactClass)),reactClass}var mixin=__webpack_require__(21),assign=__webpack_require__(20),mixinProto=mixin({componentDidMount:mixin.MANY,componentWillMount:mixin.MANY,componentWillReceiveProps:mixin.MANY,shouldComponentUpdate:mixin.ONCE,componentWillUpdate:mixin.MANY,componentDidUpdate:mixin.MANY,componentWillUnmount:mixin.MANY,getChildContext:mixin.MANY_MERGED});module.exports=function(){var reactMixin=mixinProto;return reactMixin.onClass=function(reactClass,mixin){return mixinClass(reactClass,mixin)},reactMixin.decorate=function(mixin){return function(reactClass){return reactMixin.onClass(reactClass,mixin)}},reactMixin}()},function(module,exports){"use strict";var context=salt.fetch.context({mockUrlPrefix:"/mock/",urlPrefix:"/",mock:!0,withCredentials:!1,traditional:!0,data:{_tb_token_:""},timeout:5e3,fit:function(response){return{success:response.success,content:response.content,error:{errorMsg:response.errorMsg,errorCode:response.errorCode,errorLevel:response.errorLevel}}}});context.create("SomeModuleAPI",{getSomeInfo:{mockUrl:"query/getSomeInfo.json",url:"query/getSomeInfo.json"}}),module.exports=context.api},function(module,exports){"use strict";module.exports=Reflux.createActions(["fetch"])},function(module,exports){"use strict";module.exports=Reflux.createActions(["fetch"])},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();__webpack_require__(16);var Hello=function(_React$Component){function Hello(props){_classCallCheck(this,Hello);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Hello).call(this,props));return _this.state={},_this}return _inherits(Hello,_React$Component),_createClass(Hello,[{key:"render",value:function(){return React.createElement("div",{className:"hello t-p10"},"say hello!!")}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(nextProps){}},{key:"shouldComponentUpdate",value:function(nextProps,nextState){return!0}},{key:"componentWillUpdate",value:function(nextProps,nextState){}},{key:"componentDidUpdate",value:function(prevProps,prevState){}},{key:"componentWillUnmount",value:function(){}}]),Hello}(React.Component);module.exports=Hello},function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(5)},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();__webpack_require__(17);var reactMixin=__webpack_require__(1),Actions=__webpack_require__(3),Store=__webpack_require__(9),_SaltUI=SaltUI,Group=_SaltUI.Group,Avatar=_SaltUI.Avatar,Toast=_SaltUI.Toast,Button=_SaltUI.Button,Page=function(_React$Component){function Page(props){_classCallCheck(this,Page);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Page).call(this,props));return _this.state={loaded:!1,content:{},error:!1},_this}return _inherits(Page,_React$Component),_createClass(Page,[{key:"componentDidMount",value:function(){this.handleClick("1234")}},{key:"handleClick",value:function(workNo){Toast.show({type:"loading",content:"Loading"}),Actions.fetch({workNo:workNo},function(data){Toast.hide()})}},{key:"handleBack",value:function(){salt.router.goBack()}},{key:"render",value:function(){var t=this;return React.createElement("div",{className:"page-demo"},React.createElement(Group,null,React.createElement(Group.Head,null,"DEMO"),React.createElement(Group.List,{lineIndent:15,itemIndent:15},t.state.content.list?t.state.content.list.map(function(item){return React.createElement("div",{className:"t-LH44 t-FBH t-FBAC",onClick:t.handleClick.bind(t,item.workNo)},React.createElement(Avatar,{size:"32"}),React.createElement("div",{className:"t-FB1 t-PL10"},item.name,item.nickName?"("+item.nickName+")":""))}):React.createElement("div",{className:"t-PL10 t-LH44 t-FBH t-FBAC t-FBJC"},t.state.error?"Error":"No data"))),React.createElement("div",{className:"t-PL10 t-PR10 t-PT10"},React.createElement(Button,{type:"secondary",onClick:t.handleBack},"Back")))}}]),Page}(React.Component);reactMixin.onClass(Page,Reflux.connect(Store)),module.exports=Page},function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(7)},function(module,exports,__webpack_require__){"use strict";var Actions=__webpack_require__(3),DB=__webpack_require__(2);module.exports=Reflux.createStore({listenables:[Actions],data:{loaded:!1,content:{},error:!1},onFetch:function(params,cb){var t=this;DB.SomeModuleAPI.getSomeInfo(params).then(function(content){t.data.loaded=!0,t.data.content=content,t.updateComponent(),cb&&cb(t.data)})["catch"](function(error){t.data.error=error,t.updateComponent(),cb&&cb(t.data)})},updateComponent:function(){this.trigger(this.data)},getInitialState:function(){return this.data}})},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();__webpack_require__(18);var _SaltUI=(__webpack_require__(1),SaltUI),Toast=_SaltUI.Toast,Button=_SaltUI.Button,Hello=__webpack_require__(6),PageHome=function(_React$Component){function PageHome(props){_classCallCheck(this,PageHome);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(PageHome).call(this,props));return _this.state={},_this}return _inherits(PageHome,_React$Component),_createClass(PageHome,[{key:"handleClick",value:function(options){Toast.show(options)}},{key:"handleLink",value:function(route){location.hash=route}},{key:"handlePush",value:function(){salt.router.push({id:"popwin",url:"./popwin.html",anim:2,needPost:!0,param:{foo:1,bar:2}}).then()["catch"](function(e){1001===e.errorCode&&(location.href="./popwin.html")})}},{key:"render",value:function(){var t=this;return React.createElement("div",{className:"page-home"},React.createElement("div",{className:"t-PL10 t-PR10 t-PT10"},React.createElement(Button,{type:"primary",onClick:t.handleClick.bind(t,{type:"success",content:"You clicked"})},"Click me")),React.createElement("div",{className:"t-PL10 t-PR10 t-PT10"},React.createElement(Button,{type:"secondary",onClick:t.handlePush.bind(t)},"Pop new window")),React.createElement("div",{className:"t-PL10 t-PR10 t-PT10"},React.createElement(Button,{type:"secondary",onClick:t.handleLink.bind(t,"demo")},"Demo")),React.createElement("div",{className:"t-PL10 t-PR10 t-PT10"},React.createElement(Button,{type:"secondary",onClick:t.handleLink.bind(t,"test")},"test")),React.createElement(Hello,null))}}]),PageHome}(React.Component);module.exports=PageHome},function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(10)},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();__webpack_require__(19);var reactMixin=__webpack_require__(1),Store=(__webpack_require__(4),__webpack_require__(14)),Test=function(_React$Component){function Test(props){_classCallCheck(this,Test);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Test).call(this,props));return _this.state={},_this}return _inherits(Test,_React$Component),_createClass(Test,[{key:"render",value:function(){return React.createElement("div",{className:"test"},"page test")}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(nextProps){}},{key:"shouldComponentUpdate",value:function(nextProps,nextState){return!0}},{key:"componentWillUpdate",value:function(nextProps,nextState){}},{key:"componentDidUpdate",value:function(prevProps,prevState){}},{key:"componentWillUnmount",value:function(){}}]),Test}(React.Component);reactMixin.onClass(Test,Reflux.connect(Store)),module.exports=Test},function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(12)},function(module,exports,__webpack_require__){"use strict";var Actions=__webpack_require__(4);__webpack_require__(2);module.exports=Reflux.createStore({listenables:[Actions],data:{loaded:!1},onFetch:function(params,cb){var t=this;t.data.loaded=!0,t.updateComponent(),cb&&cb(t.data)},updateComponent:function(){this.trigger(this.data)},getInitialState:function(){return this.data}})},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){"use strict";function ToObject(val){if(null==val)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(val)}module.exports=Object.assign||function(target,source){for(var from,keys,to=ToObject(target),s=1;s<arguments.length;s++){from=arguments[s],keys=Object.keys(Object(from));for(var i=0;i<keys.length;i++)to[keys[i]]=from[keys[i]]}return to}},function(module,exports){var objToStr=function(x){return Object.prototype.toString.call(x)},thrower=function(error){throw error},mixins=module.exports=function(rules,_opts){function setNonEnumerable(target,key,value){key in target?target[key]=value:Object.defineProperty(target,key,{value:value,writable:!0,configurable:!0})}var opts=_opts||{};return opts.unknownFunction||(opts.unknownFunction=mixins.ONCE),opts.nonFunctionProperty||(opts.nonFunctionProperty=function(left,right,key){if(void 0!==left&&void 0!==right){var getTypeName=function(obj){return obj&&obj.constructor&&obj.constructor.name?obj.constructor.name:objToStr(obj).slice(8,-1)};throw new TypeError("Cannot mixin key "+key+" because it is provided by multiple sources, and the types are "+getTypeName(left)+" and "+getTypeName(right))}return void 0===left?right:left}),function(source,mixin){Object.keys(mixin).forEach(function(key){var left=source[key],right=mixin[key],rule=rules[key];if(void 0!==left||void 0!==right){var wrapIfFunction=function(thing){return"function"!=typeof thing?thing:function(){return thing.call(this,arguments)}};if(rule){var fn=rule(left,right,key);return void setNonEnumerable(source,key,wrapIfFunction(fn))}var leftIsFn="function"==typeof left,rightIsFn="function"==typeof right;return leftIsFn&&void 0===right||rightIsFn&&void 0===left||leftIsFn&&rightIsFn?void setNonEnumerable(source,key,wrapIfFunction(opts.unknownFunction(left,right,key))):void(source[key]=opts.nonFunctionProperty(left,right,key))}})}};mixins._mergeObjects=function(obj1,obj2){var assertObject=function(obj,obj2){var type=objToStr(obj);if("[object Object]"!==type){var displayType=obj.constructor?obj.constructor.name:"Unknown",displayType2=obj2.constructor?obj2.constructor.name:"Unknown";thrower("cannot merge returned value of type "+displayType+" with an "+displayType2)}};if(Array.isArray(obj1)&&Array.isArray(obj2))return obj1.concat(obj2);assertObject(obj1,obj2),assertObject(obj2,obj1);var result={};return Object.keys(obj1).forEach(function(k){Object.prototype.hasOwnProperty.call(obj2,k)&&thrower("cannot merge returns because both have the "+JSON.stringify(k)+" key"),result[k]=obj1[k]}),Object.keys(obj2).forEach(function(k){result[k]=obj2[k]}),result},mixins.ONCE=function(left,right,key){if(left&&right)throw new TypeError("Cannot mixin "+key+" because it has a unique constraint.");var fn=left||right;return function(args){return fn.apply(this,args)}},mixins.MANY=function(left,right,key){return function(args){return right&&right.apply(this,args),left?left.apply(this,args):void 0}},mixins.MANY_MERGED_LOOSE=function(left,right,key){return left&&right?mixins._mergeObjects(left,right):left||right},mixins.MANY_MERGED=function(left,right,key){return function(args){var res1=right&&right.apply(this,args),res2=left&&left.apply(this,args);return res1&&res2?mixins._mergeObjects(res1,res2):res2||res1}},mixins.REDUCE_LEFT=function(_left,_right,key){var left=_left||function(x){return x},right=_right||function(x){return x};return function(args){return right.call(this,left.apply(this,args))}},mixins.REDUCE_RIGHT=function(_left,_right,key){var left=_left||function(x){return x},right=_right||function(x){return x};return function(args){return left.call(this,right.apply(this,args))}}}]);