import{_ as o}from"./Post.071ef68c.js";import{h as p,w as c,o as l,b as n,e as s}from"./vendor.433fbd7a.js";import"./app.a28fe036.js";const r=n("div",{class:"markdown-body"},[n("h2",{id:"\u554F\u984C",tabindex:"-1",class:"text-2xl font-bold mt-2em mb-1em next:mt-0"},[n("a",{class:"header-anchor text-sky-500 dark:text-sky-400 font-medium hover:underline",href:"#\u554F\u984C","aria-hidden":"true"},"#"),s(" \u554F\u984C")]),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},"\u60F3\u8981\u5728\u4E0D\u80FD\u4F7F\u7528 VPN \u7684\u7522\u54C1\u4E0A\u900F\u904E Wifi \u9023\u5230 VPN\uFF0C\u5C31\u53EF\u4EE5\u89E3\u958B\u6709\u4E9B\u670D\u52D9\u7684\u5730\u5340\u9650\u5236\uFF0C\u4E5F\u53EF\u4EE5\u4EE5\u975E\u5E38\u4FBF\u5229\u7684\u65B9\u5F0F\u5FEB\u901F\u5207\u63DB VPN\u3002"),n("h2",{id:"\u74B0\u5883",tabindex:"-1",class:"text-2xl font-bold mt-2em mb-1em next:mt-0"},[n("a",{class:"header-anchor text-sky-500 dark:text-sky-400 font-medium hover:underline",href:"#\u74B0\u5883","aria-hidden":"true"},"#"),s(" \u74B0\u5883")]),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},"Unifi USG"),n("h2",{id:"\u89E3\u6C7A\u8FA6\u6CD5",tabindex:"-1",class:"text-2xl font-bold mt-2em mb-1em next:mt-0"},[n("a",{class:"header-anchor text-sky-500 dark:text-sky-400 font-medium hover:underline",href:"#\u89E3\u6C7A\u8FA6\u6CD5","aria-hidden":"true"},"#"),s(" \u89E3\u6C7A\u8FA6\u6CD5")]),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},"\u9996\u5148\u5148\u5728\u4F60\u60F3\u8981\u7684\u570B\u5BB6\u67B6\u8A2D OpenVPN \u4F3A\u670D\u5668\uFF0C\u6216\u662F\u4F7F\u7528\u514D\u8CBB\u6216\u4ED8\u8CBB\u7684 OpenVPN \u4F3A\u670D\u5668\u3002"),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},[s("\u53D6\u5F97 ovpn \u6A94\u6848\u5F8C\u7528\u8A18\u4E8B\u672C\u6216\u4F60\u7FD2\u6163\u7684\u6587\u5B57\u7DE8\u8F2F\u5668\u958B\u555F\u6A94\u6848\u5728 "),n("code",null,"<ca>"),s(" \u4E4B\u524D\u52A0\u4E0A "),n("code",null,"route-nopull")]),n("pre",{class:"language-bash"},[n("code",{class:"language-bash"},[s("route-nopull "),n("span",{class:"token comment"},"#\u52A0\u4E0A"),s(`
`),n("span",{class:"token operator"},"<"),s("ca"),n("span",{class:"token operator"},">"),s(`
xxxxxxxxxxxxx
`)])]),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},[s("\u63A5\u4E0B\u4F86\u5C07 ovpn \u6A94\u6848\u8907\u88FD\u5230 USG\uFF0C\u8DEF\u5F91\uFF1A"),n("code",null,"/config/openvpn/")]),n("pre",{class:"language-bash"},[n("code",{class:"language-bash"},[n("span",{class:"token function"},"scp"),s(` /path/to/filename.ovpn user@usg-ip:/config/openvpn/
`)])]),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},"\u4E4B\u5F8C\u5728 Unifi \u4E0A\u65B0\u589E\u4F60\u8981\u4F7F\u7528\u7684 Corporate Network\uFF08\u6709\u7DDA\u7DB2\u8DEF\uFF09& Wireless Network\uFF08\u7121\u7DDA\u7DB2\u8DEF\uFF09\u4E26\u8A2D\u5B9A VLANID"),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},[s("\u5982\u679C\u76F4\u63A5\u5728USG\u4E0A\u8A2D\u5B9AOpenVPN\u8DDF\u8DEF\u7531\u7684\u8A71\u6703\u56E0\u70BA\u91CD\u65B0\u555F\u52D5\u800C\u8986\u84CB\u6389\u539F\u672C\u7684\u66F4\u52D5\uFF0C\u6240\u4EE5\u8981\u5728 Unifi Controller \u4E2D\u52A0\u4E0A "),n("a",{href:"https://help.ubnt.com/hc/en-us/articles/215458888-UniFi-USG-Advanced-Configuration",class:"text-sky-500 dark:text-sky-400 font-medium hover:underline",target:"_blank",rel:"noopener"},"config.gateway.json"),s(" \u6A94\u6848\uFF0C\u5167\u5BB9\u5982\u4E0B\uFF1A")]),n("pre",{class:"language-json with-filename"},[n("div",{class:"code-block-filename"},"config.gateway.json"),n("code",{class:"language-json"},[n("span",{class:"token punctuation"},"{"),s(`
 `),n("span",{class:"token property"},'"firewall"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"modify"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token property"},'"namevpn"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"rule"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
     `),n("span",{class:"token property"},'"10"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"action"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"modify"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Traffic to VLAN to VPN"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"modify"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
       `),n("span",{class:"token property"},'"table"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"source"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
       `),n("span",{class:"token property"},'"address"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"<VLAN's Address/Subnet>"`),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
     `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
   `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"source-validation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"disable"'),s(`
 `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
 `),n("span",{class:"token property"},'"interfaces"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"ethernet"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token property"},'"eth1"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"vif"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
     `),n("span",{class:"token property"},'"<VLANID>"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"firewall"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
       `),n("span",{class:"token property"},'"in"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"modify"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"namevpn"'),s(`
       `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
     `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
   `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"openvpn"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token property"},'"vtun0"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"firewall"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
     `),n("span",{class:"token property"},'"in"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"LAN_IN"'),s(`
     `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
     `),n("span",{class:"token property"},'"local"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"LAN_LOCAL"'),s(`
     `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
     `),n("span",{class:"token property"},'"out"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"LAN_OUT"'),s(`
     `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"config-file"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/config/openvpn/filename.ovpn"'),s(`
   `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
 `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
 `),n("span",{class:"token property"},'"protocols"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"static"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token property"},'"table"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"1"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
     `),n("span",{class:"token property"},'"interface-route"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"0.0.0.0/0"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
       `),n("span",{class:"token property"},'"next-hop-interface"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"vtun0"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"''"`),s(`
       `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
     `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
   `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
 `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
 `),n("span",{class:"token property"},'"service"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"nat"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"rule"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"5000"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"masq to vpn vtun0"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"destination"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"address"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.0.0.0/0"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"outbound-interface"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"vtun0"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"masquerade"'),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},[s("\u4F9D\u7167\u4F60\u7684Unifi\u7DB2\u8DEF\u8A2D\u5B9A\u66F4\u6539\u4F60\u60F3\u8981\u4F7F\u7528\u7684 "),n("code",null,"<VLAN's Address/Subnet>"),s(" & "),n("code",null,"<VLANID>"),s("\uFF0C\u4E4B\u5F8C\u5C07 "),n("a",{href:"https://help.ubnt.com/hc/en-us/articles/215458888-UniFi-USG-Advanced-Configuration",class:"text-sky-500 dark:text-sky-400 font-medium hover:underline",target:"_blank",rel:"noopener"},"config.gateway.json"),s(" \u8907\u88FD\u5230\uFF1A"),n("code",null,"/unifi/data/sites/<unifi_base>/")]),n("pre",{class:"language-bash"},[n("code",{class:"language-bash"},[n("span",{class:"token function"},"scp"),s(" /path/to/config.gateway.json user@unifi-controller:/unifi/data/sites/"),n("span",{class:"token operator"},"<"),s("unifi_base"),n("span",{class:"token operator"},">"),s(`/
`)])]),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},[n("code",null,"<unifi_base>"),s(" \u7684\u4F4D\u7F6E\u56E0\u64CD\u4F5C\u7CFB\u7D71\u800C\u7570\u3002\u4F60\u53EF\u4EE5\u5728\u700F\u89BD\u5668\u7684URL\u4E0A\u9762\uFF0C\u63A7\u5236\u5668\u7684\u7DB2\u5740\u4E2D\u627E\u5230\u3002\u539F\u59CB\u7AD9\u9EDE\u540D\u70BA "),n("code",null,"default"),s("\uFF0C\u5982\u679C\u4F60\u6709\u4E00\u500B\u4EE5\u4E0A\u7684\u7AD9\u9EDE\uFF0CUnifi \u5C07\u6703\u70BA\u6BCF\u500B\u5275\u5EFA\u7684\u7AD9\u9EDE\u5206\u914D\u4E00\u500B\u96A8\u6A5F\u5B57\u7B26\u4E32\u3002\u4F8B\u5982\uFF0C\u7576\u5728\u7AD9\u9EDE\u7684\u5100\u8868\u677F\u9801\u9762\u9762\u6642\uFF0C\u5C07\u5728 URL \u6B04\u4E2D\u770B\u5230\uFF1A")]),n("pre",{class:"language-bash"},[n("code",{class:"language-bash"},`https://127.0.0.1:8443/manage/s/ceb1m27d/dashboard
`)]),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},[n("code",null,"ceb1m27d"),s(" \u5C31\u662F "),n("code",null,"<unifi_base>"),s(" \u7684\u4F4D\u7F6E")]),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},"\u628A\u6A94\u6848\u4E1F\u9032\u53BB\u4EE5\u5F8C\u4F60\u53EF\u4EE5\u53BB Devices > USG > Config > Manage Device > Force provision\uFF0C\u5F37\u5236 Provision USG\uFF0C\u5C31\u6703\u628A\u4F60\u7684\u8A2D\u5B9A\u6A94\u63A8\u9001\u5230 USG \u4E0A\uFF0C\u9019\u500B\u904E\u7A0B\u53EF\u80FD\u8981\u7B49\u5F85\u6578\u5206\u9418\u3002"),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},[s("\u5982\u679C\u60F3\u8981\u6062\u5FA9\u7684\u8A71\u55AE\u7D14\u522A\u9664 "),n("code",null,"config.gateway.json"),s(" \u5F8C\u5F37\u5236 Provision USG \u5C31\u53EF\u4EE5\u56DE\u5FA9\u539F\u72C0\u4E86\u3002")]),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},"\u4EE5\u4E0A\u3002"),n("h2",{id:"\u53C3\u8003\u8CC7\u6599",tabindex:"-1",class:"text-2xl font-bold mt-2em mb-1em next:mt-0"},[n("a",{class:"header-anchor text-sky-500 dark:text-sky-400 font-medium hover:underline",href:"#\u53C3\u8003\u8CC7\u6599","aria-hidden":"true"},"#"),s(" \u53C3\u8003\u8CC7\u6599")]),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},[n("a",{href:"https://help.ubnt.com/hc/en-us/articles/215458888-UniFi-USG-Advanced-Configuration",class:"text-sky-500 dark:text-sky-400 font-medium hover:underline",target:"_blank",rel:"noopener"},"UniFi \u2013 USG Advanced Configuration")]),n("p",{class:"my-1.25em last:mt-0 first:mb-0 leading-[1.75]"},[n("a",{href:"https://community.ui.com/t5/UniFi-Routing-Switching/USG-Route-VLAN-over-OpenVPN-client/td-p/2146180",class:"text-sky-500 dark:text-sky-400 font-medium hover:underline",target:"_blank",rel:"noopener"},"USG Route VLAN over OpenVPN client")])],-1),y={setup(i,{expose:t}){const a={title:"\u5728USG\u4E0A\u5C07VLAN\u6D41\u91CF\u5C0E\u5411OpenVPN",author:"hanlee",type:"post",lang:"zh-TW",date:"2019-04-26T17:34:14.000Z",description:"\u5728\u4E0D\u80FD\u4F7F\u7528VPN\u7684\u7522\u54C1\u4E0A\u900F\u904EWifi\u9023\u5230VPN\uFF0C\u5C31\u53EF\u4EE5\u89E3\u958B\u6709\u4E9B\u670D\u52D9\u7684\u5730\u5340\u9650\u5236\u3002",url:"/\u5728usg\u4E0A\u5C07vlan\u6D41\u91CF\u5C0E\u5411openvpn/",image:"/images/2019/04/1_dExpXTogMQ1mnsJKvFMOMA.png",categories:["OpenVPN","Unifi"],tags:["OpenVPN","Unifi","USG","VLAN","VPN","Wifi"]};return t({frontmatter:a}),(u,k)=>{const e=o;return l(),p(e,{frontmatter:a},{default:c(()=>[r]),_:1})}}};export{y as default};
