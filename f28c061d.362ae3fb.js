(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(92)),o={id:"Quick_Start",title:"Quick Start Guide \ud83c\udfc3",sidebar_label:"Quick Start Guide"},c={unversionedId:"Quick_Start",id:"Quick_Start",isDocsHomePage:!1,title:"Quick Start Guide \ud83c\udfc3",description:"Start Here",source:"@site/docs/Quick_Start.md",permalink:"/SHAFT_Engine_Docusaurus/docs/Quick_Start",editUrl:"https://mohabmohie.github.io/SHAFT_Engine_Docusaurus/edit/master/website/docs/Quick_Start.md",sidebar_label:"Quick Start Guide"},s=[{value:"Start Here",id:"start-here",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"start-here"},"Start Here"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a new Java/Maven project using Eclipse, IntelliJ",Object(i.b)("sup",Object(n.a)({parentName:"li"},{id:"fnref-1"}),Object(i.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," or your favourite IDE."),Object(i.b)("li",{parentName:"ul"},"Copy the highlighted contents of this ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/MohabMohie/using_SHAFT_ENGINE/blob/7bfc918b00dfd2bd674c349a07bcec3fa98913a6/pom.xml#L12-L79"}),"pom.xml")," file into yours inside the ",Object(i.b)("inlineCode",{parentName:"li"},"<project>")," tag."),Object(i.b)("li",{parentName:"ul"},"Create the following file ",Object(i.b)("inlineCode",{parentName:"li"},"src/test/resources/testDataFiles/simpleJSON.json"),"."),Object(i.b)("li",{parentName:"ul"},"Copy the below code snippet into your newly created json file.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "searchQuery": "SHAFT_Engine"\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a new Package under ",Object(i.b)("inlineCode",{parentName:"li"},"src/test/java")," and create a new Java Class under that package."),Object(i.b)("li",{parentName:"ul"},"Copy the below code snippet into your newly created java class.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public class Test_Wizard_GUI {\n    SHAFT.GUI.WebDriver driver;\n    SHAFT.TestData.JSON testData;\n\n    By searchBox = By.name("q");\n    By resultStats = By.id("result-stats");\n\n    @Test\n    public void test() {\n        driver.browser().navigateToURL("https://www.google.com/");\n        driver.verifyThat().browser().title().isEqualTo("Google").perform();\n        driver.element().type(searchBox, testData.getTestData("searchQuery"))\n                .keyPress(searchBox, Keys.ENTER);\n        driver.assertThat().element(resultStats).text().doesNotEqual("")\n                .withCustomReportMessage("Check that result stats is not empty").perform();\n    }\n\n    @BeforeClass\n    public void beforeClass() {\n        driver = new SHAFT.GUI.WebDriver();\n        testData = new SHAFT.TestData.JSON("simpleJSON.json");\n    }\n\n    @AfterClass\n    public void afterClass() {\n        driver.quit();\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run it as a TestNG Test Class."),Object(i.b)("li",{parentName:"ul"},"The execution report will open automatically in your default web browser after the test run is completed."),Object(i.b)("li",{parentName:"ul"},"You can change the target browser, operating system, timeouts, and other configurations using the \u2699\ufe0f ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://mohabmohie.github.io/SHAFT_ENGINE/"}),"Configuration Manager"),".")))}u.isMDXComponent=!0},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);