class PageBody{
  constructor(main){
    this.main = main
    this.modifyPage = this.modifyMainKanji.bind(this)
    this.modifyKanjiTitle = this.modifyKanjiTitle.bind(this)
  }

  modifyKanjiTitle(kanji){
    const kanjiTitle = this.main.querySelector("kanji-title")

  }

  modifyMainKanji(data){
    const mainKanji = this.main.querySelector("#kanji")
    mainKanji.textContent = data[0].kanji.character
  }
}
