(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{30:function(e,t,a){e.exports=a(47)},35:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(18),s=a.n(l),i=(a(35),a(29)),r=(a(36),a(4)),c=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return o.a.createElement(n.Fragment,null,o.a.createElement("button",{className:"menu",onClick:function(){l(!a)},onBlur:function(){l(!1)}},o.a.createElement("span",{className:a?"halfLine":""}),o.a.createElement("span",null),o.a.createElement("span",{className:a?"halfLine":""})),o.a.createElement("nav",{className:a?"openNav":""},o.a.createElement("h3",null,"Project To-Do"),o.a.createElement(r.c,{exact:!0,to:"/"},o.a.createElement("i",{className:"material-icons"},"settings")," My Day"),o.a.createElement(r.c,{to:"/important"},o.a.createElement("i",{className:"material-icons"},"star")," Important"),o.a.createElement(r.c,{to:"/tasks"},o.a.createElement("i",{className:"material-icons"},"work")," Tasks")))},d=(a(41),a(15)),m=a(27),u=a(9),p=a(10),h=a(13),f=a(11),v=a(14),E=(a(42),a(43),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={className:""},a.onChange=function(e){a.props.change(e,a.props.ki)},a.onFocus=function(){a.setState({className:"inputFocus"})},a.onBlur=function(e){""!==e.target.value?a.setState({className:"inputBlur"}):a.setState({className:"inputDanger"})},a.callBack=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"inputDanger";a.setState({className:e})},a.i=0,a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e="text",t="";return"date"===this.props.type&&(e=this.props.type,t="dateClass"),o.a.createElement("label",{className:t+" input-field "+this.state.className,ref:"input"},o.a.createElement("p",null,this.props.label),o.a.createElement("input",{type:e,value:this.props.value,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onChange}))}},{key:"componentDidMount",value:function(){this.props.elm({key:this.props.ki,cb:this.callBack}),this.props.value&&this.onFocus()}},{key:"componentDidUpdate",value:function(){0===this.i&&""!==this.props.value&&(this.setState({className:"inputBlur"}),this.i++)}}]),t}(n.Component)),y=a(12),g=function(e){return{type:"addTodo",payload:e}},b=function(e){return{type:"editTodo",payload:e}},N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={editMode:!1,title:"",loc:"",desc:"",expiresIn:"",alert:"",success:!1},a.elms=[],a.getElements=function(e){a.elms.push(e)},a.getValue=function(e,t){if("expiresIn"===t)return a.setState({expiresIn:e.target.value}),!0;a.setState(Object(m.a)({},t,e.target.value))},a.validation=function(e){e.preventDefault();var t=!0,n=!0,o=!1,l=void 0;try{for(var s,i=a.elms[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var r=s.value;""===a.state[r.key]&&(r.cb(),t=!1,a.setState({alert:"Please fill all the fields"})),"expiresIn"===r.key&&""!==a.state.expiresIn&&new Date(a.state.expiresIn).getTime()<(new Date).getTime()&&(r.cb(),t=!1,a.setState({alert:"Please select a future date"}))}}catch(c){o=!0,l=c}finally{try{n||null==i.return||i.return()}finally{if(o)throw l}}t&&a.onSubmit()},a.index=0,a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"onSubmit",value:function(){var e=this,t={title:this.state.title,loc:this.state.loc,desc:this.state.desc,expiresIn:this.state.expiresIn,important:!1,completed:!1,id:Math.random().toString()};if(this.state.editMode)return this.props.dispatch(b({index:this.index,todo:t})),this.props.history.push("/"),!0;this.props.dispatch(g(t)),this.setState({title:"",loc:"",desc:"",expiresIn:"",alert:"",success:!0});var a=!0,n=!1,o=void 0;try{for(var l,s=this.elms[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){l.value.cb("")}}catch(i){n=!0,o=i}finally{try{a||null==s.return||s.return()}finally{if(n)throw o}}setTimeout((function(){e.setState({success:!1})}),1500)}},{key:"render",value:function(){return o.a.createElement("div",{className:"EditCreate"},o.a.createElement("header",null,o.a.createElement("h1",null,this.state.editMode?"Edit Existing":"Add New"),o.a.createElement("h3",null,"Todo")),this.state.success&&o.a.createElement("p",{className:"successMessage"},"Your Todo has been Saved"),o.a.createElement("form",{action:"/",onSubmit:this.validation,className:"card"},o.a.createElement("h1",null,this.state.editMode?"Edit Existing":"Add New"," Todo"),o.a.createElement(E,{label:"Title",change:this.getValue,ki:"title",value:this.state.title,elm:this.getElements}),o.a.createElement(E,{label:"Location",change:this.getValue,ki:"loc",value:this.state.loc,elm:this.getElements}),o.a.createElement(E,{label:"Description",change:this.getValue,ki:"desc",value:this.state.desc,elm:this.getElements}),o.a.createElement(E,{label:"Expires In",change:this.getValue,type:"date",ki:"expiresIn",value:this.state.expiresIn,elm:this.getElements}),""!==this.state.alert&&o.a.createElement("p",{className:"alert"},this.state.alert),o.a.createElement("button",{className:"btn"},this.state.editMode?"Edit":"Create"," Todo")))}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;if(t){var a=this.props.allTodos.find((function(a,n){return e.index=n,a.id===t}));a?this.setState({title:a.title,editMode:!0,desc:a.desc,loc:a.loc,expiresIn:a.expiresIn}):this.props.history.push("/")}else{var n=new Date,o=n.getDate().toString();o.length<2&&(o=0+o);var l=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+o;this.setState({expiresIn:l})}}}]),t}(n.Component),T=Object(y.b)((function(e){return{allTodos:e.allTodos}}))(N),S=(a(45),function(e){return{type:"todoCompleted",payload:e}}),k=function(e){return{type:"deleteTodo",payload:e}},x=function(e){return{type:"todoImportant",payload:e}},I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[],title:""},a.importantTodoHandler=function(e){a.props.dispatch(x(e));var t=a.state.todos.slice(),n=a.props.location.pathname;if("/"===n||"/tasks"===n)a.setState({todos:t});else if("/important"===n){var o=t.filter((function(e){return e.important}));a.setState({todos:o})}},a.deleteTodo=function(e){var t,n=a.state.todos.slice();a.props.allTodos.find((function(a,n){return t=n,a.id===e})),a.props.dispatch(k(t)),n.splice(t,1),a.setState({todos:n})},a.todoCompletationHandler=function(e){a.props.dispatch(S(e));var t=a.state.todos.slice(),n=a.props.location.pathname;if("/"===n||"/important"===n)a.setState({todos:t});else if("/tasks"===n){var o=t.filter((function(e){return!e.completed}));a.setState({todos:o})}},a.setData=function(e){var t=a.props.allTodos;if("/"===e)a.setState({todos:t,title:"My Day"});else if("/important"===e){var n=t.filter((function(e){return e.important}));a.setState({todos:n,title:"Important"})}else if("/tasks"===e){var o=t.filter((function(e){return!e.completed}));a.setState({todos:o,title:"Tasks"})}},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"home"},o.a.createElement(r.b,{to:"/add",className:"addBtn material-icons"},"add"),o.a.createElement("header",null,o.a.createElement("h1",null,this.state.title),o.a.createElement("h3",null,"Today")),this.state.todos.map((function(t,a){var n,l="";return l=t.completed?"checked":"check",n=(new Date(t.expiresIn).getTime()-(new Date).getTime())/36e5<=12&&!t.completed?"expiresIn":"",o.a.createElement("div",{className:"todoBox "+n,key:a},o.a.createElement("i",{className:"material-icons star",onClick:function(){e.importantTodoHandler(t.id)}},t.important?"star":"star_border"),o.a.createElement("div",{className:"todoTitle",onClick:function(){e.todoCompletationHandler(t.id)}},o.a.createElement("i",{className:"material-icons "+l},"check"),t.title),o.a.createElement("div",{className:"actions"},o.a.createElement(r.b,{to:"/view/"+t.id,className:"material-icons green"},"remove_red_eye"),o.a.createElement(r.b,{to:"/edit/"+t.id,className:"material-icons marginLR grey"},"edit"),o.a.createElement("div",{className:"material-icons red",onClick:function(){e.deleteTodo(t.id)}},"delete")))})))}},{key:"componentDidMount",value:function(){this.setData(this.props.location.pathname)}},{key:"shouldComponentUpdate",value:function(e,t){if(e!==this.props||t!==this.state)return e.location.pathname!==this.props.location.pathname&&this.setData(e.location.pathname),!0}}]),t}(n.Component),O=Object(y.b)((function(e){return{allTodos:e.allTodos}}))(I),j=(a(46),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(r.b,{to:"/add",className:"addBtn material-icons"},"add"),this.state.todo&&o.a.createElement("div",{className:"view"},o.a.createElement("header",null,o.a.createElement("h1",null,this.state.todo.title),o.a.createElement("h3",null,"Todo")),o.a.createElement("div",{className:"card"},o.a.createElement("h1",null,this.state.todo.title," Todo"),o.a.createElement("div",{className:"basicInfo"},o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Status"),o.a.createElement("th",null,"Important"),o.a.createElement("th",null,"Expiry Date"),o.a.createElement("th",null,"Expires In"),o.a.createElement("th",null,"Location"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,this.state.todo.completed?"Completed":"Incomplete"),o.a.createElement("td",null,this.state.todo.important?"Yes":"No"),o.a.createElement("td",null,this.state.expDate),o.a.createElement("td",{className:this.state.className},this.state.expiresIn),o.a.createElement("td",null,this.state.todo.loc))))),o.a.createElement("h3",null,"Description:"),this.state.todo.desc)))}},{key:"componentDidMount",value:function(){var e=this,t=this.props.allTodos.find((function(t){return t.id===e.props.match.params.id}));if(t){var a=new Date(t.expiresIn),n=a.getDate().toString();n.length<2&&(n=0+n);var o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()]+" "+n+", "+a.getFullYear(),l="",s=(a.getTime()-(new Date).getTime())/36e5;s<12&&s>0&&!t.completed?l="expiring":s<0&&!t.completed&&(l="expired"),s=s<0?"0 hour":s>0&&s<1?"Less than 1 hour":s<2?s.toFixed()+" hour":s.toFixed()+" hours",this.setState({todo:t,expDate:o,expiresIn:s,className:l})}else this.props.history.push("/")}}]),t}(n.Component)),D=Object(y.b)((function(e){return{allTodos:e.allTodos}}))(j),w=function(){return o.a.createElement(r.a,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),o.a.createElement(c,null),o.a.createElement("div",{className:"TodoRoutes"},o.a.createElement(d.c,{className:"TodoRoutes"},o.a.createElement(d.a,{path:"/edit/:id",component:T}),o.a.createElement(d.a,{path:"/add",component:T}),o.a.createElement(d.a,{path:"/view/:id",component:D}),o.a.createElement(d.a,{path:"/important",component:O}),o.a.createElement(d.a,{e:!0,path:"/",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(17),M=JSON.parse(localStorage.getItem("allTodo"));null==M&&(M=[]);var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;if("addTodo"===t.type)e.push(t.payload),localStorage.setItem("allTodo",JSON.stringify(e));else if("editTodo"===t.type)e[t.payload.index]=t.payload.todo,localStorage.setItem("allTodo",JSON.stringify(e));else if("todoCompleted"===t.type){var a=e.find((function(e){return e.id===t.payload}));a.completed=!a.completed,localStorage.setItem("allTodo",JSON.stringify(e))}else if("todoImportant"===t.type){var n=e.find((function(e){return e.id===t.payload}));n.important=!n.important,localStorage.setItem("allTodo",JSON.stringify(e))}else"deleteTodo"===t.type&&(e.splice(t.payload,1),localStorage.setItem("allTodo",JSON.stringify(e)));return e},F=Object(C.b)({allTodos:B}),J=Object(C.c)(F);s.a.render(o.a.createElement(y.a,{store:J},o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.db22bf7f.chunk.js.map