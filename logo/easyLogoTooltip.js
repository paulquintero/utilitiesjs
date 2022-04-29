document.addEventListener("DOMContentLoaded", function (event) {
    let easyLogoToolTip = new EasyLogoToolTip();
    easyLogoToolTip.createLogo();
});
class EasyLogoToolTip {
    textTooltip = "'Tooltip message.'";
    hrefLogo = "#";
    srcImage = "URLIMAGE";

    bakgroundTooltip = "#000000";
    colorTextTooltip = "#FFFFFF";
    colorHightLightTooltip= "#f8ffa1";
    colorHightLightLogo= "#f8ffa1";
    mainContainer = `mainContainer${this.styleRandomId()}`;
    fixed = `fixed${this.styleRandomId()}`;
    floatLogo = `floatLogo${this.styleRandomId()}`;
    highLight = `highLight${this.styleRandomId()}`;
    link = `link${this.styleRandomId()}`;
    backGroundStyle = "background-image: linear-gradient(to bottom right, #000000, #ffffff);";
    alignLogoBottom = "0";
    alignLogoRight = "0";
    width = "50px;";
    height = "50px;";
    borderRadius = "8px";
    constructor() {

    }
    styleRandomId() {
        return (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    }
    styleMainContainer() {
        console.log(this.textTooltip);
        var style = document.createElement("style");
        style.innerHTML = `.${this.mainContainer} {width: ${this.width};  height: ${this.height};}
            .${this.mainContainer}:hover {  width: auto;  height: auto;}
            .${this.mainContainer}::before {  visibility: hidden;}
            :hover.${this.mainContainer}::before {  content: ${this.textTooltip};  margin-right: 70px;  margin-bottom: 15px;  background: ${this.bakgroundTooltip};  border-radius: ${this.borderRadius};  padding: 6px;  color: ${this.colorTextTooltip};  font-weight: 700;  border: 2px solid #3f3f3f;  visibility: visible;  display: block;  box-shadow:  0px 0px 7px 2px ${this.colorHightLightLogo};}
            `;
        console.log(style.innerHTM);
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }
    styleFixed() {
        let style = document.createElement("style");
        style.innerHTML = `.${this.fixed} {  bottom: ${this.alignLogoBottom};  right: ${this.alignLogoRight};  position: fixed;  z-index: 100;} `;
        console.log(style.innerHTM);
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }
    styleFloatLogo() {
        let style = document.createElement("style");
        style.innerHTML =
            `.${this.floatLogo} {  background-color: #fff;  border-radius: 34px;  border: 3px solid #3f3f3f;  ${this.backGroundStyle}  padding: 4px;}
            .${this.floatLogo} img {  width: ${this.width};  height: ${this.height};  object-fit: contain;}`;
        console.log(style.innerHTM);
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }
    styleHighlight() {
        let style = document.createElement("style");
        style.innerHTML = `.${this.highLight} { box-shadow:  0px 0px 7px 2px  ${this.colorHightLightTooltip};}`;
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }

    styleLink() {
        let style = document.createElement("style");
        style.innerHTML = `.${this.link} {  text-decoration: none;  font-size: 18px;  color: #fff;}`;
        console.log(style.innerHTM);
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }

    createLogo() {
        const container = document.createElement("div");
        const logo = document.createElement("div");
        const link = document.createElement("a");
        const img = document.createElement("img");

        link.setAttribute("href", this.hrefLogo);
        link.setAttribute("target", "_Blank");
        img.setAttribute("src", this.srcImage);

        this.styleMainContainer();
        this.styleFixed();
        this.styleFloatLogo();
        this.styleHighlight();
        this.styleLink();

        container.classList.add(this.mainContainer, this.fixed);
        logo.classList.add(this.floatLogo, this.highLight, this.fixed);
        link.className = this.link;
        container.appendChild(logo);
        logo.appendChild(link);
        link.appendChild(img);
        document.body.appendChild(container);
    }
}

