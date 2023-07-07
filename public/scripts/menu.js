function openSidebar() {
    document.querySelector(".sidebar").classList.toggle("hidden");

    if (!document.querySelector(".sidebar").classList.contains("hidden")){
        document.querySelector(".sidebar").classList.add("flex");
    }

}