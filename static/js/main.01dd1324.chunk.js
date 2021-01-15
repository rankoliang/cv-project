(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(1),a=n.n(r),c=n(41),o=n.n(c),s=(n(53),n(54),n(19)),u=n(11),l=n(20),d=n(7),b=n(8),j=n(6),h=n(10),p=n(9),O=n(12),f=n(38);var v=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};var m=function(e){return"".concat(v(e.first)," ").concat(v(e.last))},x=n(13),g=n(14),y=n(17);var k=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return n.reverse().slice(1).reduce((function(e,t){return Object(u.a)({},t,e)}),Object(u.a)({},n[0],e))};var C=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return n.reduce((function(e,t){return e[t]}),e)},E=n(46);function F(){var e=Object(O.a)(["\n  input {\n    margin-left: 0;\n    margin-right: 0.5em;\n  }\n"]);return F=function(){return e},e}function D(){var e=Object(O.a)(["\n  h2 {\n    margin: 0;\n  }\n\n  input {\n    padding: 0.25em;\n    margin: 0 0.5em;\n  }\n\n  &:not(:first-child) {\n    margin-top: 0.5em;\n  }\n\n  *:not(:last-child) {\n    margin-bottom: 0.5em;\n  }\n"]);return D=function(){return e},e}var S=x.a.form(D()),w=x.a.div(F()),M=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.label,r=e.children;return Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:t,children:n}),r]})}}]),n}(r.Component),A=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).onFormSubmit=i.onFormSubmit.bind(Object(j.a)(i)),i.onFormCancel=i.onFormCancel.bind(Object(j.a)(i)),i}return Object(b.a)(n,[{key:"onFormSubmit",value:function(e){var t=this.props,n=t.toggleEdit,i=t.submitForm,r=t.subject;e.preventDefault(),i(r),n()}},{key:"onFormCancel",value:function(e){e.preventDefault(),this.props.toggleEdit()}},{key:"render",value:function(){return Object(i.jsxs)(S,{onSubmit:this.onFormSubmit,children:[Object(i.jsx)("h2",{children:this.props.title}),this.props.children,Object(i.jsxs)(w,{children:[Object(i.jsx)("input",{type:"button",onClick:this.onFormCancel,value:"Cancel"}),Object(i.jsx)("input",{type:"submit",value:"Submit"})]})]})}}],[{key:"onFieldChange",value:function(){for(var e=this,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=n[0],a=n.slice(1);return function(t){var i;i=n.length>1?Object.assign({},e.state[r],k(t.target.value,a)):t.target.value,e.setState(Object(u.a)({},r,i))}}}]),n}(r.Component),T=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.label,r=void 0===n?v(t)+":":n,a=e.children,c=Object(y.a)(e,["id","label","children"]);return Object(i.jsxs)(M,{id:t,label:r,children:[Object(i.jsx)("input",Object(g.a)({id:t},c)),a]})}}]),n}(r.Component),q=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.label,r=Object(y.a)(e,["id","label"]);return Object(i.jsx)(M,{id:t,label:n,children:Object(i.jsx)(E.a,Object(g.a)({id:t},r))})}}]),n}(r.Component),I=function(e,t){return function(n){var r=n.field,a=n.fields,c=void 0===a?[r]:a,o=Object(y.a)(n,["field","fields"]);return Object(i.jsx)(e,Object(g.a)({onChange:A.onFieldChange.apply(t,c),value:C.apply(void 0,[t.state].concat(Object(l.a)(c)))},o))}},P=A,N=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state=Object.assign({},i.props.info),i.InputField=I(T,Object(j.a)(i)),i.onPhoneChange=i.onPhoneChange.bind(Object(j.a)(i)),i}return Object(b.a)(n,[{key:"onPhoneChange",value:function(e){this.setState({phone:e})}},{key:"render",value:function(){var e=this.props,t=(e.info,Object(y.a)(e,["info"])),n=this.InputField;return Object(i.jsxs)(P,Object(g.a)(Object(g.a)({subject:this.state},t),{},{children:[Object(i.jsx)(n,{id:"first-name",label:"First Name:",fields:["name","first"],placeholder:"John",required:!0}),Object(i.jsx)(n,{id:"last-name",label:"Last Name:",fields:["name","last"],placeholder:"Smith",required:!0}),Object(i.jsx)(n,{id:"email",type:"email",label:"Email:",field:"email",placeholder:"jsmith@example.com"}),Object(i.jsx)(q,{id:"phone",label:"Phone:",defaultCountry:"US",placeholder:"Enter a phone number",onChange:this.onPhoneChange,value:this.state.phone})]}))}}]),n}(r.Component);function B(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 0.25em;\n\n  a {\n    color: inherit;\n    font-style: normal;\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    * {\n      margin-right: 0.2em;\n    }\n  }\n\n  & > *:not(:last-child):after {\n    content: '|';\n    margin: 0 0.25em;\n  }\n"]);return B=function(){return e},e}function J(){var e=Object(O.a)(["\n  text-align: center;\n\n  h1 {\n    border-bottom: 1px solid black;\n    margin: 0;\n  }\n"]);return J=function(){return e},e}var L=x.a.div(J()),U=x.a.address(B()),G=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).handleEdit=i.handleEdit.bind(Object(j.a)(i)),i}return Object(b.a)(n,[{key:"handleEdit",value:function(){this.props.toggleEdit()}},{key:"render",value:function(){var e=this.props.info,t=e.name,n=e.email,r=e.phone;return Object(i.jsxs)(L,{children:[Object(i.jsx)("h1",{children:m(t)}),Object(i.jsx)(H,{email:n,phone:r}),Object(i.jsx)("button",{onClick:this.handleEdit,children:"Edit"})]})}}]),n}(r.Component),H=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.email,n=e.phone;return Object(i.jsxs)(U,{children:[t&&Object(i.jsxs)("a",{href:"mailto:".concat(t),children:[Object(i.jsx)(f.a,{}),t]}),n&&Object(i.jsxs)("a",{href:"tel:".concat(n),children:[Object(i.jsx)(f.b,{}),n]})]})}}]),n}(r.Component),Y=G,z=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state=Object.assign({},i.props.education),i.InputField=I(T,Object(j.a)(i)),i}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.education,Object(y.a)(e,["education"])),n=this.state.school,r=this.InputField;return Object(i.jsxs)(P,Object(g.a)(Object(g.a)({subject:this.state},t),{},{children:[Object(i.jsx)(r,{id:"school-name",label:"School Name:",field:"school",placeholder:"Harvard University"}),Object(i.jsx)(r,{id:"degree-type",label:"Degree type:",fields:["degree","type"],placeholder:"BS",required:""!==n}),Object(i.jsx)(r,{id:"degree-field",label:"Field of study:",fields:["degree","field"],placeholder:"Computer Science",required:""!==n}),Object(i.jsx)(r,{id:"graduation-date",type:"date",label:"Graduation date:",field:"date"})]}))}}]),n}(r.Component),K=n(63),Q=n(45),R=n(64),V=n(62);function W(){var e=Object(O.a)(["\n  text-transform: uppercase;\n  margin: 0.1em 0;\n"]);return W=function(){return e},e}function X(){var e=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid black;\n\n  & > *:not(:last-child) {\n    margin-right: 0.25em;\n  }\n\n  h2 {\n    margin: 0.1em 0;\n  }\n"]);return X=function(){return e},e}var Z=x.a.div(X()),$=x.a.h3(W()),_=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).handleEdit=i.handleEdit.bind(Object(j.a)(i)),i}return Object(b.a)(n,[{key:"handleEdit",value:function(){this.props.toggleEdit()}},{key:"render",value:function(){var e=this.props.education,t=e.school,n=e.degree,r=e.date;return Object(i.jsxs)("div",{children:[Object(i.jsxs)(Z,{children:[Object(i.jsx)("h2",{children:"Education"}),Object(i.jsx)("button",{onClick:this.handleEdit,children:"Edit"})]}),t&&Object(i.jsx)($,{children:t}),t&&Object(i.jsxs)("div",{children:[n.type&&n.field&&Object(i.jsxs)("div",{children:[n.type," in ",n.field]}),Object(i.jsx)(ee,{date:r})]})]})}}]),n}(r.Component),ee=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).date=Object(K.a)(e.date,"yyyy-MM-dd",new Date),i}return Object(b.a)(n,[{key:"render",value:function(){return Object(Q.a)(this.date)?Object(i.jsxs)("span",{children:[this.dateContext,": ",this.formattedDate]}):null}},{key:"formattedDate",get:function(){return Object(R.a)(this.date,"MMM dd, yyyy")}},{key:"dateContext",get:function(){return Object(V.a)(this.date)?"Graduated":"Expected graduation"}}]),n}(r.Component),te=_,ne=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.props.experience,n=t.company,r=t.title,a=t.tasks,c=t.startDate,o=t.endDate;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("h2",{children:n})}),Object(i.jsxs)("div",{children:[c," - ",o]}),Object(i.jsx)("p",{children:r}),Object(i.jsx)("ul",{children:Object.entries(a).map((function(e){var t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(i.jsx)("li",{children:r},n)}))}),Object(i.jsx)("button",{onClick:function(){return e.props.toggleEdit()},children:"Edit"}),Object(i.jsx)("button",{onClick:function(){return e.props.deleteExperience()},children:"Delete"})]})}}]),n}(r.Component),ie=n(29),re=n.n(ie),ae=function(e,t){var n=new Map([].concat(Object(l.a)(Object.entries(e)),Object(l.a)(Object.entries(t))));return Object.fromEntries(Object(l.a)(n.entries()))},ce=function(e,t){var n=Object.entries(e).filter(t);return Object.fromEntries(n)};var oe=function(e,t){function n(e){return Object(K.a)(e,"yyyy-MM-dd",new Date)}var i=(e=n(e))>(t=n(t))?e:t;return Object(R.a)(i,"yyyy-MM-dd")},se=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={experience:i.props.experience},i.onChange=i.onChange.bind(Object(j.a)(i)),i.deleteTask=i.deleteTask.bind(Object(j.a)(i)),i.addTask=i.addTask.bind(Object(j.a)(i)),i.onChanger=Object.fromEntries(["company","title","endDate"].map((function(e){return[e,i.onChange(e)]}))),i.onChanger.startDate=function(e){var t=e.target.value;i.setState((function(e){var n=e.experience;return{experience:ae(n,{startDate:t,endDate:oe(n.endDate,t)})}}))},i}return Object(b.a)(n,[{key:"onChange",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return function(i){t.setState({experience:ae(t.state.experience,Object(u.a)({},e,n(i.target.value)))})}}},{key:"addTask",value:function(){this.setState({experience:ae(this.state.experience,{tasks:ae(this.state.experience.tasks,Object(u.a)({},re()(),""))})})}},{key:"deleteTask",value:function(e){this.setState((function(t){var n=t.experience,i=ce(n.tasks,(function(t){return Object(s.a)(t,1)[0]!==e}));return{experience:ae(n,{tasks:i})}}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.experience,r=t.experience,a=r.company,c=r.title,o=r.startDate,l=r.endDate,d=r.tasks;return Object(i.jsxs)(S,{onSubmit:function(t){t.preventDefault(),e.props.submitForm(n),e.props.toggler()},children:[Object(i.jsx)("h2",{children:this.props.title}),Object(i.jsx)(T,{id:"company",onChange:this.onChanger.company,value:a,required:!0}),Object(i.jsx)(T,{id:"title",onChange:this.onChanger.title,value:c,required:!0}),Object(i.jsx)(T,{id:"start-date",type:"date",label:"Start Date:",onChange:this.onChanger.startDate,value:o,required:!0}),Object(i.jsx)(T,{id:"end-date",type:"date",label:"End Date:",min:o,onChange:this.onChanger.endDate,value:l,required:!0}),Object(i.jsxs)("fieldset",{children:[Object(i.jsx)("legend",{children:"Tasks: "}),Object.entries(d).map((function(t){var n=Object(s.a)(t,2),r=n[0],a=n[1];return Object(i.jsx)(ue,{task:a,id:r,onChange:e.onChange("tasks",(function(e){return ae(d,Object(u.a)({},r,e))})),onDelete:function(t){t.preventDefault(),e.deleteTask(r)},required:!0},r)})),Object(i.jsx)("button",{onClick:function(t){t.preventDefault(),e.addTask()},children:"Add task"})]}),Object(i.jsxs)(w,{children:[Object(i.jsx)("input",{type:"button",value:"Cancel",onClick:function(t){t.preventDefault(),e.props.toggler()}}),Object(i.jsx)("input",{type:"submit",value:"Submit"})]})]})}}]),n}(r.Component),ue=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.task,n=e.onChange,r=e.onDelete,a=Object(y.a)(e,["task","onChange","onDelete"]);return Object(i.jsx)(T,Object(g.a)(Object(g.a)({label:"",value:t,onChange:n},a),{},{children:Object(i.jsx)("button",{onClick:r,children:"Delete"})}))}}]),n}(r.Component),le=se;function de(){var e=Object(O.a)(["\n  border-bottom: 1px solid black;\n"]);return de=function(){return e},e}var be=x.a.h2(de()),je=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).handleAdd=i.handleAdd.bind(Object(j.a)(i)),i}return Object(b.a)(n,[{key:"handleAdd",value:function(){this.props.toggleFormShow()}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.experiences,r=e.showForm,a=e.showEdit,c=e.deleteExperience,o=e.submitExperience,u=e.toggleEdit;return Object(i.jsxs)("div",{children:[Object(i.jsx)(be,{children:t}),Object.entries(n).map((function(e){var t=Object(s.a)(e,2),n=t[0],r=t[1];return a.get(n)?Object(i.jsx)(le,{title:"Edit Experience",experience:r,toggler:function(){return u(n)},submitForm:function(e){return o(n,e)}},n):Object(i.jsx)(ne,{experience:r,toggleEdit:function(){return u(n)},deleteExperience:function(){return c(n)}},n)})),Object(i.jsx)("button",{onClick:this.handleAdd,children:"Add experience"}),r&&Object(i.jsx)(le,{title:"New Experience",toggler:this.handleAdd,submitForm:function(e){return o(re()(),e)},experience:{startDate:Object(R.a)(new Date,"yyyy-MM-dd"),endDate:Object(R.a)(new Date,"yyyy-MM-dd"),company:"",title:"",tasks:{}}})]})}}]),n}(r.Component);function he(){var e=Object(O.a)(["\n  margin: 1em;\n  padding: 1em;\n  border: 1px solid black;\n"]);return he=function(){return e},e}var pe=x.a.div(he()),Oe=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={info:{name:{first:"Your",last:"Name"},email:"",phone:""},education:{school:"",degree:{type:"",field:""},date:Object(R.a)(new Date,"yyyy-MM-dd")},experiences:{},isEditing:new Map([["info",!1],["education",!1],["experience",!1],["experiences",new Map]])},i.toggleEdit=i.toggleEdit.bind(Object(j.a)(i)),i.submitForm=i.submitForm.bind(Object(j.a)(i)),i.submitExperience=i.submitExperience.bind(Object(j.a)(i)),i.deleteExperience=i.deleteExperience.bind(Object(j.a)(i)),i}return Object(b.a)(n,[{key:"toggleEdit",value:function(e){var t=this;return function(n){t.setState((function(t){var i=t.isEditing.get(e),r=n?new Map([].concat(Object(l.a)(i),[[n,!i.get(n)]])):!i;return{isEditing:new Map([].concat(Object(l.a)(t.isEditing),[[e,r]]))}}))}}},{key:"submitForm",value:function(e){var t=this;return function(n){t.setState(Object(u.a)({},e,n))}}},{key:"submitExperience",value:function(e,t){this.setState({experiences:ae(this.state.experiences,Object(u.a)({},e,t))})}},{key:"deleteExperience",value:function(e){this.setState({experiences:ce(this.state.experiences,(function(t){return Object(s.a)(t,1)[0]!==e}))})}},{key:"render",value:function(){var e=this.state,t=e.education,n=e.info,r=e.isEditing,a=r.get("info")?N:Y,c=r.get("education")?z:te;return Object(i.jsxs)(pe,{children:[Object(i.jsx)(a,{title:"Info",info:n,toggleEdit:this.toggleEdit("info"),submitForm:this.submitForm("info")}),Object(i.jsx)(c,{title:"Education",education:t,toggleEdit:this.toggleEdit("education"),submitForm:this.submitForm("education")}),Object(i.jsx)(je,{title:"Experience",experiences:this.state.experiences,toggleFormShow:this.toggleEdit("experience"),toggleEdit:this.toggleEdit("experiences"),showForm:r.get("experience"),showEdit:r.get("experiences"),submitExperience:this.submitExperience,deleteExperience:this.deleteExperience})]})}}]),n}(r.Component);var fe=function(){return Object(i.jsx)(Oe,{})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),a(e),c(e)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(fe,{})}),document.getElementById("root")),ve()}},[[58,1,2]]]);
//# sourceMappingURL=main.01dd1324.chunk.js.map