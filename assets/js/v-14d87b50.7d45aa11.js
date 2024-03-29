"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82508],{65213:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-14d87b50","path":"/devices/WXKG22LM.html","title":"Aqara WXKG22LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara WXKG22LM control via MQTT","description":"Integrate your Aqara WXKG22LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-30T19:41:12.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Click mode (enum)","slug":"click-mode-enum","link":"#click-mode-enum","children":[]},{"level":3,"title":"Operation mode (enum)","slug":"operation-mode-enum","link":"#operation-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1711737189000},"filePathRelative":"devices/WXKG22LM.md"}')},222008:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var i=o(166252);const d=(0,i._)("h1",{id:"aqara-wxkg22lm",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#aqara-wxkg22lm","aria-hidden":"true"},"#"),(0,i.Uk)(" Aqara WXKG22LM")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"WXKG22LM")],-1),n=(0,i._)("td",null,"Vendor",-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Wireless remote switch H1M (double rocker)")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery, voltage, action, click_mode, operation_mode, linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WXKG22LM.png",alt:"Aqara WXKG22LM"})])],-1),s=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single_left</code>, <code>single_right</code>, <code>single_both</code>, <code>double_left</code>, <code>double_right</code>, <code>double_both</code>, <code>triple_left</code>, <code>triple_right</code>, <code>triple_both</code>, <code>hold_left</code>, <code>hold_right</code>, <code>hold_both</code>.</p><h3 id="click-mode-enum" tabindex="-1"><a class="header-anchor" href="#click-mode-enum" aria-hidden="true">#</a> Click mode (enum)</h3><p>Click mode, fast: only supports single click which will be send immediately after clicking.multi: supports more events like double and hold. Value can be found in the published state on the <code>click_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;click_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;click_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>fast</code>, <code>multi</code>.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum" aria-hidden="true">#</a> Operation mode (enum)</h3><p>Operation mode, select &quot;command&quot; to enable bindings (wake up the device before changing modes!). Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>command</code>, <code>event</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),h={},m=(0,o(983744).Z)(h,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[a,(0,i._)("tbody",null,[l,(0,i._)("tr",null,[n,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Aqara"},{default:(0,i.w5)((()=>[(0,i.Uk)("Aqara")])),_:1})])]),c,r,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),s])}]])}}]);