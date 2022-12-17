import{d as _,f,o as m,c as d,a as l,F as w,b as N,n as C,t as h,u as x,g as p,w as y,v as b,e as $,h as k}from"./index-7b411996.js";import{_ as q,a as v,P as g,b as A}from"./PhoneNumberProcessor-6542be28.js";const I="http://phone-number-api.com/json/?number=",P="https://api.apilayer.com/number_verification/validate?number=",F="BqvYrJ8DgiI4n62qC61xD5Mttg93RXba",j=e=>e.status!=="success"?{ok:!1}:{ok:!0,countryCode:e.numberCountryCode?`+${e.numberCountryCode}`:"",countryName:e.countryName||"",countryId:e.country||"",number:e.query||""},V=e=>e.valid?{ok:!0,countryCode:e.country_prefix||"",countryName:e.country_name||"",countryId:e.country_code||"",number:e.local_format||""}:{ok:!1},s={"number-verification":{url:P,config:{headers:{apikey:F}},parsingFunction:V},"phone-number":{url:I,config:{},parsingFunction:j}},B=async(e,n)=>{try{if(!(n in s))throw new Error("Api name is missing or doesn't exist");const t=s==null?void 0:s[n],a=t==null?void 0:t.url;if(!a)throw new Error(`Missing url in .env for api ${n}`);const o=await(await fetch(`${a}${e}`,t.config)).json();if(o.error)throw new Error(o.error);return t.parsingFunction(o)}catch(t){return console.error(t),null}},E={class:"flex h-full flex-col gap-10 items-stretch justify-around"},R={class:"flex flex-col lg:flex-row gap-8 text-sm"},S=["onClick"],U=["placeholder"],L=_({__name:"PrefixedPhoneNumberInput",props:{phoneData:{type:Object,required:!0},name:{type:String,required:!0},countriesData:{type:Array,required:!0}},setup(e){const n=e,t=f(!1),a=f(!1),u=Object.keys(s),o=f(u[0]),D=async i=>{const c=i.target;if(g.validateNumberWithPrefix(c.value)){const r=await B(c.value,o.value);if(!r){t.value=!0;return}r!=null&&r.ok?(t.value=!1,a.value=!1,n.phoneData.code=r.countryCode,n.phoneData.countryId=r.countryId,n.phoneData.countryName=r.countryName,n.phoneData.number=g.removeCodeFromNumber(c.value,n.phoneData.code)):(t.value=!1,a.value=!0,n.phoneData.code="",n.phoneData.countryId="",n.phoneData.countryName="",n.phoneData.number="")}};return(i,c)=>(m(),d("div",E,[l("div",R,[(m(!0),d(w,null,N(x(u),r=>(m(),d("button",{class:C([o.value===r?"text-warning":"","underline"]),onClick:()=>o.value=r},h(i.$t(`fields.${e.name}.choose-api`))+" "+h(r),11,S))),256))]),l("fieldset",null,[l("label",null,h(i.$t(`fields.${e.name}.label`)),1),l("input",{name:"phone",type:"tel",onInput:D,required:"",placeholder:i.$t(`fields.${e.name}.placeholder`)},null,40,U),p(q,{"input-name":e.name},null,8,["input-name"]),y(p(v,{"input-name":e.name},null,8,["input-name"]),[[b,a.value]]),y(p(v,{"input-name":e.name,"error-key":"api-error"},null,8,["input-name"]),[[b,t.value]])])]))}}),z=_({__name:"SingleInputView",setup(e){return(n,t)=>(m(),$(A,null,{number:k(({countriesData:a,phoneData:u})=>[p(L,{name:"prefixed-number-input","countries-data":a,phoneData:u},null,8,["countries-data","phoneData"])]),_:1}))}});export{z as default};
