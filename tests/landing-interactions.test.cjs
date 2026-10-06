const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
class Element {
 constructor(dataset={}){this.dataset=dataset;this.attributes={};this.classes=new Set();this.listeners={};this.children=[];this.hidden=false;this.textContent='';this.classList={add:c=>this.classes.add(c),remove:c=>this.classes.delete(c),contains:c=>this.classes.has(c),toggle:(c,v)=>{const enabled=v??!this.classes.has(c);enabled?this.classes.add(c):this.classes.delete(c);return enabled;}};}
 addEventListener(e,fn){this.listeners[e]=fn;} setAttribute(k,v){this.attributes[k]=v;}getAttribute(k){return this.attributes[k];}removeAttribute(k){delete this.attributes[k];}querySelectorAll(){return [];}querySelector(s){return this.sub?.[s] || new Element();}append(...c){this.children.push(...c);}replaceChildren(...c){this.children=c;}focus(){this.focused=true;}click(){this.listeners.click?.({preventDefault(){}});}
}
const steps=[0,1,2].map(n=>new Element({step:String(n)})), wallets=['activity','deposit','withdraw'].map(wallet=>new Element({wallet})),roles=['driver','rider'].map(role=>new Element({role})),maps=['rider','driver'].map(map=>new Element({map}));[steps[0],wallets[0],roles[0],maps[0]].forEach(e=>e.classList.add('active'));
const vehicles=['moto','car'].map(vehicle=>new Element({vehicle}));vehicles[0].classList.add('active');
const audienceLinks=['rider','driver'].map(accountLink=>new Element({accountLink}));
const ids=new Map(),singles=new Map();const getId=id=>{if(!ids.has(id))ids.set(id,new Element());return ids.get(id)};const getSingle=s=>{if(!singles.has(s))singles.set(s,new Element());return singles.get(s)};
const navigationLinks=[new Element(),new Element()];
getSingle('#primary-nav').querySelectorAll=()=>navigationLinks;
const documentListeners={};
const doc={querySelector:getSingle,getElementById:getId,querySelectorAll:s=>({'[data-vehicle]':vehicles,'[data-account-link]':audienceLinks,'[data-step]':steps,'[data-wallet]':wallets,'[data-role]':roles,'[data-map]':maps,'[data-role], [data-map]':[...roles,...maps]})[s]||[],addEventListener(type,fn){documentListeners[type]=fn;},createElement:()=>new Element(),createTextNode:text=>({textContent:text})};
vm.runInNewContext(fs.readFileSync(require('node:path').join(__dirname,'../main.js'),'utf8'),{document:doc,window:{matchMedia:()=>({matches:true}),addEventListener(){}},setTimeout:()=>1,clearTimeout(){},Date});
steps[1].click();assert.equal(getId('demo-title').textContent,'Car or moto?');assert.equal(steps[1].attributes['aria-pressed'],'true');assert.equal(steps[0].attributes['aria-pressed'],'false');
steps[2].click();assert.equal(getId('demo-title').textContent,'Follow your journey.');
wallets[2].click();assert.match(getId('wallet-description').textContent,/withdrawal request/);assert.equal(getId('wallet-rows').children.length,3);assert.equal(wallets[2].attributes['aria-pressed'],'true');wallets[1].click();assert.match(getId('wallet-description').textContent,/deposit/);
roles[1].click();assert.match(getId('join-fee').innerHTML,/Free/);roles[0].click();assert.match(getId('join-fee').innerHTML,/5,000/);
maps[1].click();assert.equal(getId('map-title').textContent,'Review your ride request');
getSingle('.menu-toggle').click();assert.equal(getSingle('.menu-toggle').getAttribute('aria-expanded'),'true');
console.log('Journey, wallet, account role, map and navigation interaction checks pass (simulated DOM).');

roles[1].click();assert.equal(getId('join-documents').children.length,3);assert.match(getId('join-intro').textContent,/no registration fee/);assert.equal(getId('join-cta').textContent,'Start as a rider →');assert.equal(roles[0].attributes['aria-pressed'],'false');
roles[0].click();assert.equal(getId('join-documents').children.length,6);assert.match(getId('join-steps').children[3].textContent,/registration fee/);
getSingle('.nav-dropdown > button').click();assert.equal(getId('about-menu').hidden,false);documentListeners.keydown({key:'Escape'});assert.equal(getSingle('.menu-toggle').getAttribute('aria-label'),'Open navigation');assert.equal(getId('about-menu').hidden,true);assert.equal(getSingle('.menu-toggle').focused,true);
getSingle('.menu-toggle').click();documentListeners.click({target:{closest:()=>null}});assert.equal(getSingle('.menu-toggle').getAttribute('aria-expanded'),'false');
console.log('Role documents, fees, CTA, Escape focus and outside-click checks pass.');

vehicles[1].click();assert.equal(getId('vehicle-copy').textContent,'Explore a car ride for your everyday journey.');assert.equal(vehicles[1].attributes['aria-pressed'],'true');assert.equal(vehicles[0].attributes['aria-pressed'],'false');vehicles[0].click();assert.match(getId('vehicle-copy').textContent,/motorcycle/);
audienceLinks[0].click();assert.match(getId('join-fee').innerHTML,/Free/);assert.equal(getId('join-cta').textContent,'Start as a rider →');audienceLinks[1].click();assert.match(getId('join-fee').innerHTML,/5,000/);assert.equal(getId('join-cta').textContent,'Start as a driver →');
console.log('Vehicle selection and audience-link routing checks pass.');

getSingle('.menu-toggle').click();getSingle('.nav-dropdown > button').click();navigationLinks[0].click();assert.equal(getSingle('.menu-toggle').getAttribute('aria-expanded'),'false');assert.equal(getSingle('.nav-dropdown > button').getAttribute('aria-expanded'),'false');assert.equal(getId('about-menu').hidden,true);
getId('android-download').click();assert.equal(getSingle('.toast').hidden,false);assert.match(getSingle('.toast').textContent,/not available yet/);
console.log('Section-link menu dismissal and pending download feedback checks pass.');
