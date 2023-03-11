window.onload = function () {
    //main page
	let content = document.getElementById("content");
    content.style.background = "#1b1c22";
    content.style.color = "#ffffff";
    let bodys = document.getElementsByTagName("body");
    for(body of bodys) body.style.background = "#191a1f";
    let paragraphs = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p");
    for(paragraph of paragraphs) paragraph.style.color = "#ffffff";
    let thumbinners = document.querySelectorAll(".thumbinner");
    for(thumbinner of thumbinners) thumbinner.style.backgroundColor = "#1b1c22";
    let ts_Скрытый_блок_titles = document.querySelectorAll(".ts-Скрытый_блок-title");
    for(ts_Скрытый_блок_title of ts_Скрытый_блок_titles) ts_Скрытый_блок_title.style.backgroundColor = "#191a1f";

    //navigation
    let mw_panel = document.getElementById("mw-panel");
    mw_panel.style.background = "#191a1f"; 
    let mw_head = document.getElementById("mw-head");
    mw_head.style.background = "#191a1f"; 
    let left_navigation = document.getElementById("left-navigation");
    left_navigation.style.background = "#191a1f"; 
    let right_navigation = document.getElementById("right-navigation");
    right_navigation.style.background = "#191a1f";
    let vector_menu_content = document.querySelector(".vector-menu-content");
    vector_menu_content.style.background = "#191a1f";
    let toc = document.querySelector(".toc");
    toc.style.background = "#191a1f";
    let tocnumbers = document.querySelectorAll(".tocnumber");
    for(tocnumber of tocnumbers) tocnumber.style.color = "#ffffff";

    let p_views = document.getElementById("p-views");
    p_views.style.visibility = "hidden";
    let p_namespaces = document.getElementById("p-namespaces");
    p_namespaces.style.visibility = "hidden";
    let vector_search_box_input = document.querySelector(".vector-search-box-input");
    vector_search_box_input.style.background = "#ffffff";

    let catlinks = document.getElementById("catlinks");
    catlinks.style.background = "#191a1f"; 
    let navboxes = document.querySelectorAll(".navbox");
    for(navbox of navboxes) navbox.style.background = "#191a1f";
    let navbox_groups = document.querySelectorAll(".navbox-group");
    for(navbox_group of navbox_groups) navbox_group.style.background = "#191a1f";
    let navbox_evens = document.querySelectorAll(".navbox-even");
    for(navbox_even of navbox_evens) navbox_even.style.background = "#191a1f";
    let navbox_titles = document.querySelectorAll(".navbox-title");
    for(navbox_title of navbox_titles) navbox_title.style.background = "#191a1f";

    //infobox
    let infobox = document.querySelector(".infobox");
    infobox.style.background = "#191a1f";
    let infobox_above = document.querySelector(".infobox-above");
    infobox_above.style.background = "#5c5c5c";
    let infobox_below = document.querySelector(".infobox-below");
    infobox_below.style.background = "#191a1f";

    //all links on page
    let links = document.getElementsByTagName("a");
    for(a of links) a.style.color = "#99bfff";
    let labels = document.getElementsByTagName("label");
    for(label of labels) label.style.color = "#99bfff";
    let blockquotes = document.getElementsByTagName("blockquote");
    for(blockquote of blockquotes) blockquote.style.background = "#191a1f";
}