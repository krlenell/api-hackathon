class PageBody{
  constructor(header, main){
    this.main = main
    this.header = header
    this.attribution = this.header.querySelector("p")
    this.modifyPage = this.modifyPage.bind(this)
    this.getContent = this.getContent.bind(this)
    this.displayError = this.displayError.bind(this)
    this.showAttribution = this.showAttribution.bind(this)
    this.hideAttribution = this.hideAttribution.bind(this)
    this.header.addEventListener("mouseover", this.showAttribution)
    this.header.addEventListener("mouseout", this.hideAttribution)

  }

  clearPage(){
    this.main.innerHTML = ""
  }

  showAttribution(){
    this.attribution.classList.remove("invisible")
  }

  hideAttribution(){
    this.attribution.classList.add("invisible")
  }

  setloading(){
    this.clearPage()
    this.main.insertAdjacentHTML('afterbegin',
    `<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
    </div>
    </div>`)
  }

  modifyPage(data){
    this.main.insertAdjacentHTML('afterbegin', this.getContent(data))
  }

  displayError(error, lastSearch){
    this.main.insertAdjacentHTML('afterBegin',
    `<h3 class="text-danger"> Error: Kanji Not Found.</h3>
    <h3>This app uses a limited public API.  Try searching
    <a target="_blank" href=https://jisho.org/search/${lastSearch}>Jisho</h3>`)
  }

  getContent(data){
    const dataJSON = JSON.stringify(data)
    const content =
    `<div class="row align-items-center flex-column">
      <h1 class="display-3" id="kanji">${data.kanji}</h1>
      <h3>${data.meanings[0]}</h3>
    </div>
      <div class="row justify-content-around">
        <p>Grade: ${data.grade}</p>
        <p>Strokes: ${data.stroke_count}</p>
        <p>Unicode: ${data.unicode}</p>
        <p class="text-success" data-kanjiData=${dataJSON}>Save Kanji </p>
      </div>
      <div class="row">
        <div class="col-5">
          <h5>Other meanings:</h5>
          <p>${data.meanings.join(", ")}</p>
        </div>
        <div class="col-5">
          <h5><a target="_blank" href="https://en.wikipedia.org/wiki/Remembering_the_Kanji_and_Remembering_the_Hanzi">Heisig meaning: </a></h5>
          <p><a target="_blank" href="https://kanji.koohii.com/study/kanji/${data.heisig_en}"> ${data.heisig_en}</a></p>
        </div>
      </div>
      <div class="row">
        <div class="col-5">
          <h5>Kun (Japanese) Reading:</h5>
          <p>${data.kun_readings.join(", ")}</p>
        </div>
        <div class="col-5">
          <h5>On (Chinese) Reading:</h5>
          <p>${data.on_readings.join(", ")}</p>
        </div>
      </div>`
      return content
  }

}

// sample data
// grade: 6
// heisig_en: "timber-trees"
// jlpt: 1
// kanji: "樹"
// kun_readings: ["き"]
// meanings: (5)["timber", "trees", "wood", "establish", "set up"]
// name_readings: (9)["いつき", "うえ", "こ", "しげ", "じ", "たちき", "たつ", "たつる", "な"]
// on_readings: ["ジュ"]
// stroke_count: 16
// unicode: "6a39"
