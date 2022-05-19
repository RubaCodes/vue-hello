const app = new Vue({
  el: '#app',
  data: {
    header: {
      text: 'Testo random di prova',
    },
    image: {
      source: 'https://picsum.photos/id/1002/600/400',
      alt: 'random image from the internet',
      counter: 0,
    },
  },
});
