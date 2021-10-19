function pageScroll() {
  document.querySelector('#ticker').scrollBy(2,0);
  scrolldelay = setTimeout(pageScroll,10);
}