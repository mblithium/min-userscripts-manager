// ==UserScript==
// @name Virtual UserScript Manager
// @match *
// @exclude example.com
// @run-at context-menu
// @author MB_Lithium
// ==/UserScript==

Run();

function Run() {
    return mvumHUD()
}

function injectStyle() {
    if (!document.querySelector("#extMinHUD-Style")) {
        let styles = `
            /* Styles from VirtualUserScripts Script r*/
            #extMinHUD { font-family: Arial, Helvetica, font-size: 14px; sans-serif; display: absolute; position: fixed; z-index: 999999999; background-color: hsla(267, 9%, 5%, 0.97); color: white; width: 100%; height: 100%; text-align: center; margin: none; }

            #extMinHUD h1, h2 {
                font-family: Arial, Helvetica, font-size: 30px; color: white; text-decoration: none;
            }

            #extMinHUDBlock { display: block; padding: 50px; }

            #extMinHUD #extMinHUDButtonExit {
                background-color: hsla(345, 69%, 47%, 1); color: white; padding: 10px; border-radius: 25%; width: 50px; border: 1px;
            }

            #extMinHUD .minHUDButtonMenu {
                color: white; background-color: #545454; padding: 15px; border: none; margin: 5px 0px;
            }

            div#extMinHUD div#minHUDOptionsMenu {
                color: white; text-align: left; width: 100%;
            }
        `;
        let styleElem = document.createElement("style");
        styleElem.innerText = styles;
        styleElem.id = "extMinHUD-Style";
        console.log(styleElem);
        document.body.appendChild(styleElem);
    }
}

function mvumHUD() {
    if (!document.querySelector("#extMinHUD")) {
        let createHUDBlock = document.createElement("div");
        createHUDBlock.id = "extMinHUD";

       
        let extMinHUDContent = `
        <div id="extMinHUDBlock">
                <div style="text-align: left">
                    <button type="button" id="extMinHUDButtonExit">X</button>
                </div>
                <div>
                    <h1>UserScripts Manager</h1>
                </div>
                <div id="minHUDOptionsMenu">
                    <button class="minHUDButtonMenu" type="button" id="extMinHUDButton_AddNew">Add new script</button>

                    <button class="minHUDButtonMenu" type="button" id="extMinHUDButton_Ext">My Scripts</button>

                    <button class="minHUDButtonMenu" type="button" id="extMinHUDButton_Config">Configurations</button>
                </div>
                <hr>
        </div>
        `

        createHUDBlock.innerHTML = extMinHUDContent;

        injectStyle();
        document.body.prepend(createHUDBlock);

        document.body.querySelector("#extMinHUDButtonExit").addEventListener("click", () => {
            let extMinHUDRef = document.querySelector('#extMinHUD');
            extMinHUDRef.parentNode.removeChild(extMinHUDRef)
        })
        
    } else {
        console.log('O HUD já existe!')
    }
}



