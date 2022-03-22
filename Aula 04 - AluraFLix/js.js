var listaFilmes = [
    "https://ingresso-a.akamaihd.net/img/cinema/cartaz/7766-cartaz.jpg",
    "https://ingresso-a.akamaihd.net/img/cinema/cartaz/19592-cartaz.jpg",
    "https://img.elo7.com.br/product/zoom/2657A05/big-poster-harry-potter-e-o-prisioneiro-de-azkaban-lo2-90x60-geek.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/7/7b/Harry_Potter_C%C3%A1lice_Fogo_2004.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/90/67/58/20107766.jpg",
    "https://m.media-amazon.com/images/I/81irhjzNBeL._AC_SY741_.jpg",
    "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/175320140528-uau-posters-filmes-harry-potter-7-e-as-reliquias-da-morte-parte-1--harry-potter.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/3/3a/Harry_Potter_and_the_Deathly_Hallows_-_Part_2.jpg"
  ];
  
  var linkFilmes = [
    "https://play.hbomax.com/page/urn:hbo:page:GYY7NkAImuJzDwgEAAAAL:type:feature",
    "https://play.hbomax.com/page/urn:hbo:page:GXssMIAadRcNMvwEAAAA7:type:feature",
    "https://play.hbomax.com/page/urn:hbo:page:GXssObwqZrVVGwwEAAABI:type:feature",
    "https://play.hbomax.com/page/urn:hbo:page:GXssOeAtVmlVGwwEAAABR:type:feature",
    "https://play.hbomax.com/page/urn:hbo:page:GXssPaAiBJ1VGwwEAAABW:type:feature",
    "https://play.hbomax.com/page/urn:hbo:page:GXssQ0A7HLFVGwwEAAABc:type:feature",
    "https://play.hbomax.com/page/urn:hbo:page:GXssRwQHfmVVGwwEAAABi:type:feature",
    "https://play.hbomax.com/page/urn:hbo:page:GXssRwQESq8NMvwEAAABY:type:feature"
  ];
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write(
      "<a target=_blank href=" + linkFilmes[i] + "> <img src=" + listaFilmes[i] + ">"
    );
  }
  