(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4BlA":function(e,t){e.exports="[\n  'primary',\n  'secondary',\n  'success',\n  'danger',\n  'warning',\n  'info',\n  'light',\n  'dark',\n].map((variant, idx) => (\n  <Alert key={idx} variant={variant}>\n    This is a {variant} alert with{' '}\n    <Alert.Link href=\"#\">an example link</Alert.Link>. Give it a click if you\n    like.\n  </Alert>\n));\n"},"7UZL":function(e,t){e.exports='function AlertDismissibleExample() {\n  const [show, setShow] = useState(true);\n\n  if (show) {\n    return (\n      <Alert variant="danger" onClose={() => setShow(false)} dismissible>\n        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>\n        <p>\n          Change this and that and try again. Duis mollis, est non commodo\n          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\n          Cras mattis consectetur purus sit amet fermentum.\n        </p>\n      </Alert>\n    );\n  }\n  return <Button onClick={() => setShow(true)}>Show Alert</Button>;\n}\n\nrender(<AlertDismissibleExample />);\n'},L7y3:function(e,t){e.exports='<Alert variant="success">\n  <Alert.Heading>Hey, nice to see you</Alert.Heading>\n  <p>\n    Aww yeah, you successfully read this important alert message. This example\n    text is going to run a bit longer so that you can see how spacing within an\n    alert works with this kind of content.\n  </p>\n  <hr />\n  <p className="mb-0">\n    Whenever you need to, be sure to use margin utilities to keep things nice\n    and tidy.\n  </p>\n</Alert>;\n'},Q6D8:function(e,t,n){e.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},h55t:function(e,t,n){"use strict";var a=n("mXGw"),i=n.n(a),o=n("Q6D8");t.a=function(e){var t=e.title,n=e.children,a=e.theme;return i.a.createElement("aside",{role:"note",className:o[a||"warning"]},t&&i.a.createElement("header",{className:"h5"},t),i.a.createElement("div",null,n))}},lwri:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return w})),n.d(t,"_frontmatter",(function(){return f})),n.d(t,"default",(function(){return j}));var a=n("zLVn"),i=(n("mXGw"),n("7ljp")),o=n("Snbm"),s=n("h55t"),l=n("vXRK"),r=n("1u5/"),d=n("L7y3"),c=n.n(d),u=n("zvZV"),m=n.n(u),h=n("7UZL"),p=n.n(h),x=n("shKV"),g=n.n(x),y=n("4BlA"),b=n.n(y),w="558202923",f={},A={query:w,_frontmatter:f},v=o.a;function j(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(v,Object.assign({},A,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"alerts"},"Alerts"),Object(i.mdx)("p",{className:"lead"},"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("p",null,"Alerts are available for any length of text, as well as an optional\ndismiss button. For proper styling, use one of the eight ",Object(i.mdx)("inlineCode",{parentName:"p"},"variant"),"s."),Object(i.mdx)(r.a,{codeText:m.a,mdxType:"ReactPlayground"}),Object(i.mdx)(s.a,{title:"Conveying meaning to assistive technologies",mdxType:"Callout"},"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the ",Object(i.mdx)("code",null,".sr-only")," class."),Object(i.mdx)("h3",{id:"links"},"Links"),Object(i.mdx)("p",null,"For links, use the ",Object(i.mdx)("inlineCode",{parentName:"p"},"<Alert.Link>")," component to provide matching\ncolored links within any alert."),Object(i.mdx)(r.a,{codeText:b.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"additional-content"},"Additional content"),Object(i.mdx)("p",null,"Alerts can contain whatever content you like. Headers, paragraphs, dividers, go crazy."),Object(i.mdx)(r.a,{codeText:c.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"dismissing"},"Dismissing"),Object(i.mdx)("p",null,"Add the ",Object(i.mdx)("inlineCode",{parentName:"p"},"dismissible")," prop to add a functioning dismiss\nbutton to the Alert."),Object(i.mdx)(r.a,{codeText:p.a,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,"You can also control the visual state directly which is great if you\nwant to build more complicated alerts."),Object(i.mdx)(r.a,{codeText:g.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"api"},"API"),Object(i.mdx)(l.a,{metadata:n.data.Alert,mdxType:"ComponentApi"}),Object(i.mdx)(l.a,{metadata:n.data.AlertHeading,exportedBy:n.data.Alert,mdxType:"ComponentApi"}),Object(i.mdx)(l.a,{metadata:n.data.AlertLink,exportedBy:n.data.Alert,mdxType:"ComponentApi"}))}j.isMDXComponent=!0},shKV:function(e,t){e.exports='function AlertDismissible() {\n  const [show, setShow] = useState(true);\n\n  return (\n    <>\n      <Alert show={show} variant="success">\n        <Alert.Heading>How\'s it going?!</Alert.Heading>\n        <p>\n          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget\n          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet\n          fermentum.\n        </p>\n        <hr />\n        <div className="d-flex justify-content-end">\n          <Button onClick={() => setShow(false)} variant="outline-success">\n            Close me y\'all!\n          </Button>\n        </div>\n      </Alert>\n\n      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}\n    </>\n  );\n}\n\nrender(<AlertDismissible />);\n'},zvZV:function(e,t){e.exports="[\n  'primary',\n  'secondary',\n  'success',\n  'danger',\n  'warning',\n  'info',\n  'light',\n  'dark',\n].map((variant, idx) => (\n  <Alert key={idx} variant={variant}>\n    This is a {variant} alert—check it out!\n  </Alert>\n));\n"}}]);
//# sourceMappingURL=component---src-pages-components-alerts-mdx-2cd13e797426ca171d0b.js.map