const socket = io();

socket.on('connectedUsers', (data) => {
    $("#usersConnected").text(data.number);
});

$("#welcomeMessage").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", ()=> {
    $("#welcomeMessage").css("display", "none");
    $("#navigation").css("display", "block");
    $("#main").css("display", "block");
    $("#footer").css("display", "block");
})

// Club Buttons
$("#button_dance").click(()=>{
    clubShow("dance_company", "dance_company_desc");
});

$("#button_teatro").click(()=>{
    clubShow("teatro", "teatro_desc");
});

$("#button_iheart").click(()=>{
    clubShow("iheart", "iheart_desc");
});

$("#button_peer").click(()=>{
    clubShow("peer", "peer_desc");
});

function clubShow(name, desc) {
    $("#dance_company").css("display", "none");
    $("#dance_company_desc").css("display", "none");
    $("#teatro").css("display", "none");
    $("#teatro_desc").css("display", "none");
    $("#iheart").css("display", "none");
    $("#iheart_desc").css("display", "none");
    $("#peer").css("display", "none");
    $("#peer_desc").css("display", "none");
    $("#" + name).css("display", "block");
    $("#" + desc).css("display", "block");
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

function orgShow(name, desc) {
    $("#ceaso").css("display", "none");
    $("#ceaso_desc").css("display", "none");
    $("#maces").css("display", "none");    
    $("#maces_desc").css("display", "none");
    $("#uapsa").css("display", "none");
    $("#uapsa_desc").css("display", "none");
    $("#jpsme").css("display", "none");
    $("#jpsme_desc").css("display", "none");
    $("#jpice").css("display", "none");
    $("#jpice_desc").css("display", "none");
    $("#jpiche").css("display", "none");
    $("#jpiche_desc").css("display", "none");
    $("#jiiee").css("display", "none");
    $("#jiiee_desc").css("display", "none");
    $("#jieep").css("display", "none");
    $("#jieep_desc").css("display", "none");
    $("#jpiie").css("display", "none");
    $("#jpiie_desc").css("display", "none");
    $("#jpiche").css("display", "none");
    $("#jpiche_desc").css("display", "none");
    $("#css").css("display", "none");
    $("#css_desc").css("display", "none");
    $("#cas").css("display", "none");
    $("#cas_desc").css("display", "none");
    $("#atycb").css("display", "none");
    $("#atycb_desc").css("display", "none");
    $("#" + name).css("display", "block");
    $("#" + desc).css("display", "block");
}