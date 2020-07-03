class TelaInicial {
  constructor() {
  }

  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('As Aventuras de', width/2, height/5);
    textSize(100);
    text('Ripsta', width/2, height/3);
  }

  _botao() {
    botaoGerenciador.draw();
  }
}