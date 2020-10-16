const socket = io();

socket.on('connectedUsers', (data) => {
    $("#usersConnected").text(data.number);
});

let clubIndex = 1;
let clubMax = 6;
let orgIndex = 1;
let orgMax = 11;

$("#club_left").click(() => {
    if (clubIndex == 1) {
        clubIndex = clubMax;
    }
    else {
        clubIndex--;
    }
    clubShow();    
});

$("#club_right").click(() => {
    if (clubIndex == clubMax) {
        clubIndex = 1;
    }
    else {
        clubIndex++;
    }
    clubShow();    
});

// Nav Buttons Clubs
$("#dance_company_logo_button").click(() => {
    onClubClick(1);
});
$("#teatro_logo_button").click(() => {
    onClubClick(2);
});
$("#iheart_logo_button").click(() => {
    onClubClick(3);
});
$("#peer_logo_button").click(() => {
    onClubClick(4);
});
$("#atycb_logo_button").click(()=>{
    onClubClick(5);
});
$("#rcy_logo_button").click(()=>{
    onClubClick(6);
});
function onClubClick(number) {
    clubIndex = number;
    clubShow();
}

function clubShow() {
    $("#dance_company").css("display", "none");
    $("#dance_company_logo").css("display", "none");
    $("#teatro").css("display", "none");
    $("#teatro_logo").css("display", "none");
    $("#iheart").css("display", "none");
    $("#iheart_logo").css("display", "none");
    $("#peer").css("display", "none");
    $("#peer_logo").css("display", "none");
    $("#atycb").css("display", "none");
    $("#atycb_logo").css("display", "none");
    $("#rcy").css("display", "none");
    $("#rcy_logo").css("display", "none");
    if (clubIndex == 1) {
        $("#dance_company").css("display", "block");
        $("#dance_company_logo").css("display", "block");
    }
    else if (clubIndex == 2) {
        $("#teatro").css("display", "block");
        $("#teatro_logo").css("display", "block");
    }
    else if (clubIndex == 3) {
        $("#iheart").css("display", "block");
        $("#iheart_logo").css("display", "block");
    }
    else if (clubIndex == 4) {
        $("#peer").css("display", "block");
        $("#peer_logo").css("display", "block");
    }
    else if (clubIndex == 5) {
        $("#atycb").css("display", "block");
        $("#atycb_logo").css("display", "block");
    }
    else if (clubIndex == 6) {
        $("#rcy").css("display", "block");
        $("#rcy_logo").css("display", "block");
    }
}

$("#org_left").click(() => {
    if (orgIndex == 1) {
        orgIndex = orgMax;
    }
    else {
        orgIndex--;
    }
    orgShow();    
});

$("#org_right").click(() => {
    if (orgIndex == orgMax) {
        orgIndex = 1;
    }
    else {
        orgIndex++;
    }
    orgShow();    
});

// Navigation on Org
$("#ceaso_logo_button").click(()=>{
    onOrgClick(1);
});
$("#maces_logo_button").click(()=>{
    onOrgClick(2);
});
$("#uapsa_logo_button").click(()=>{
    onOrgClick(3);
});
$("#jpsme_logo_button").click(()=>{
    onOrgClick(4);
});
$("#jpice_logo_button").click(()=>{
    onOrgClick(5);
});
$("#jpiche_logo_button").click(()=>{
    onOrgClick(6);
});
$("#jieep_logo_button").click(()=>{
    onOrgClick(7);
});
$("#jiiee_logo_button").click(()=>{
    onOrgClick(8);
});
$("#jpiie_logo_button").click(()=>{
    onOrgClick(9);
});
$("#css_logo_button").click(()=>{
    onOrgClick(10);
});
$("#cas_logo_button").click(()=>{
    onOrgClick(11);
});

function onOrgClick(number) {
    orgIndex = number;
    orgShow();
}

function orgShow() {
    $("#ceaso").css("display", "none");
    $("#ceaso_logo").css("display", "none");

    $("#maces").css("display", "none");    
    $("#maces_logo").css("display", "none");

    $("#uapsa").css("display", "none");
    $("#uapsa_logo").css("display", "none");

    $("#jpsme").css("display", "none");
    $("#jpsme_logo").css("display", "none");

    $("#jpice").css("display", "none");
    $("#jpice_logo").css("display", "none");

    $("#jpiche").css("display", "none");
    $("#jpiche_logo").css("display", "none");

    $("#jieep").css("display", "none");
    $("#jieep_logo").css("display", "none");

    $("#jiiee").css("display", "none");
    $("#jiiee_logo").css("display", "none");    

    $("#jpiie").css("display", "none");
    $("#jpiie_logo").css("display", "none");

    $("#css").css("display", "none");
    $("#css_logo").css("display", "none");

    $("#cas").css("display", "none");
    $("#cas_logo").css("display", "none");    
    
    if (orgIndex == 1) {
        $("#ceaso").css("display", "block");
        $("#ceaso_logo").css("display", "block");
    }
    else if (orgIndex == 2) {
        $("#maces").css("display", "block");
        $("#maces_logo").css("display", "block");
    }
    else if (orgIndex == 3) {
        $("#uapsa").css("display", "block");
        $("#uapsa_logo").css("display", "block");
    }
    else if (orgIndex == 4) {
        $("#jpsme").css("display", "block");
        $("#jpsme_logo").css("display", "block");
    }
    else if (orgIndex == 5) {
        $("#jpice").css("display", "block");
        $("#jpice_logo").css("display", "block");
    }
    else if (orgIndex == 6) {
        $("#jpiche").css("display", "block");
        $("#jpiche_logo").css("display", "block");
    }
    else if (orgIndex == 7) {
        $("#jieep").css("display", "block");
        $("#jieep_logo").css("display", "block");
    }
    else if (orgIndex == 8) {
        $("#jiiee").css("display", "block");
        $("#jiiee_logo").css("display", "block");
    }
    else if (orgIndex == 9) {
        $("#jpiie").css("display", "block");
        $("#jpiie_logo").css("display", "block");
    }
    else if (orgIndex == 10) {
        $("#css").css("display", "block");
        $("#css_logo").css("display", "block");
    }
    else if (orgIndex == 11) {
        $("#cas").css("display", "block");
        $("#cas_logo").css("display", "block");
    }    
}

// Org Buttons
$("#button_ceaso").click(()=>{
    orgShow("ceaso", "ceaso_desc");
});

$("#button_maces").click(()=>{
    orgShow("maces", "maces_desc");
});

$("#button_uapsa").click(()=>{
    orgShow("uapsa", "uapsa_desc");
});

$("#button_jpsme").click(()=>{
    orgShow("jpsme", "jpsme_desc");
});

$("#button_jpice").click(()=>{
    orgShow("jpice", "jpice_desc");
});

$("#button_jpiche").click(()=>{
    orgShow("jpiche", "jpiche_desc");
});

$("#button_jieep").click(()=>{
    orgShow("jieep", "jieep_desc");
});

$("#button_jiiee").click(()=>{
    orgShow("jiiee", "jiiee_desc");
});

$("#button_jpiie").click(()=>{
    orgShow("jpiie", "jpiie_desc");
});

$("#button_jpiche").click(()=>{
    orgShow("jpiche", "jpiche_desc");
});

$("#button_jpiche").click(()=>{
    orgShow("jpiche", "jpiche_desc");
});

$("#button_css").click(()=>{
    orgShow("css", "css_desc");
});

$("#button_cas").click(()=>{
    orgShow("cas", "cas_desc");
});

$("#button_atycb").click(()=>{
    orgShow("atycb", "atycb_desc");
});
