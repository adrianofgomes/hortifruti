import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; qtd: number; icon: string }> = [];
  constructor() {
    /*for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
    this.items.push({
      title: 'ABACATE',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'ABACAXI',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'ACELGA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'AGRIAO',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'AIPO',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'ALECRIM',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'ALFAC AMERIC',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'ALFAC CRESP',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'ALFAC FRISA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'ALFAC ROXA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'AMEIXA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'ANETO',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'B DAGUA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'B MACA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'B PRATA CHINA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'B PRATA M',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'B PTRATA G',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'B TERRA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'BERTALHA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'BROCO AMERICA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'BROCO COMUM',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'CEBOLINHA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'CHEIRO VERD',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'COCO VERD',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'COENTRO',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'COLVE-FLOR',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'COUVE MINEIRA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'ESPINAFRE',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'FRUTA DO CONDE',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'GOIABA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'HORTELA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'KIWI',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'LARANJA CAIXA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'LARANJA LIMA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'LARANJA PER 20K',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'LARANJA SACO 2 K',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'LARANJA SELETA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'LIMAO',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'LIXIA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'LOURO',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MAÇA ARGENTI',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MAÇA CAT 1',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MAMAO FORMOSO',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MAMAO PAPAIA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MANGA CARLOTINHA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MANGA ESPADA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MANGA PALMER',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MANGA TOMY',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MANGERICAO',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MARACUJA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MELANCIA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MELANCIA BAYBY',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MELAO',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MELAO ORANGE',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'MORANGO',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'NIRA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'PELE DE SAPO',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'PERA PORT',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'PERA WILIAN',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'PESEGO IMPORTADO',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'PORO',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'RADICHI',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'RUCULA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'SALSA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'SALSA CRESPA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'SALVIA',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'UVA THOMP',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'UVA VIT',
      qtd: 0,
      icon: 'logo-apple'
    });
    this.items.push({
      title: 'ABOBORA MOR',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'ABÓBORA SERG',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'ABOBRINHA B',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'ABOBRINHA C',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'AIPIM',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'ALHO BANCA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'ALHO COZINHA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'ALHO DESC',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'ALHO TORRADO',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'B ASTERIX',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'B BAROA GRAN',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'B DOCE G',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'B DOCE M',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'B LAVADA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'BAND BAROA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'BAND VAJEM FRANCESA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'BATATA CALAB',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'BATATA COZI',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'BATATA DOCE BRANCA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'BERINJELA C',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'BETERRABA G',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'BETERRABA M',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'BOLSAS',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'BROTO DE FEIJAO',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'CARA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'CEBOLA 4',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'CEBOLA CX3',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'CEBOLA ROXA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'CENOURA 3A',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'CENOURA G',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'CENOURA TOCO',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'CHUCHU',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'ERVILHA BANDJ',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'GARRAFA 400 ML',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'GENGIBRE',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'INHAME',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'JILO',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'MAXIXI',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'MILHO',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'NABO COMPRIDO',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'NABO REDONDO',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'OVOS B',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'OVOS CAIPIRA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'OVOS CODORNA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'OVOS JUMBO',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'PEPINO',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'PEPINO JÁ´PONES',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'PIMENTA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'PIMENTA DO REINO PÓ',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'PIMENTÃO MIST',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'PIMENTÃO VERD',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'QUIABO',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'QUIABO BADJA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'RABANETE',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'REPOLHO ROXO',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'REPOLHO VERDE',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'TAPIOCA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'TOM COLIBRI',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'TOM GRIP',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'TOMATE BANCA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'TOMATE CEREJA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'TOMATE ESTUFA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'TOMATE MOLHO',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'TOMATE SALADA',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'VAGEM MACAR',
      qtd: 0,
      icon: 'egg'
    });
    this.items.push({
      title: 'VAGEM MANTE',
      qtd: 0,
      icon: 'egg'
    });
  }

  ngOnInit() {
  }

  enviar(){
    //window.alert('Enviar lista');
    let pedido: string = '';
    this.items.forEach(function (item) {
      if(item.qtd > 0){
        console.log(item);
        pedido = pedido + item.title + ': ' + item.qtd + ';'
      }
    });
    window.open('https://api.whatsapp.com/send?text='+pedido, "_blank");
    
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
