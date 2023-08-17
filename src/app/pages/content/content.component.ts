import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  photoCover:string= "https://cinepop.com.br/wp-content/uploads/2023/07/Besouro-Azul-1-696x391.jpg.webp"
  contentTitle: string= "Meu Artigo"
  contentDescription: string="Lorem Ipsun" 
  private id: string | null= "0"
  constructor(
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value =>
      this.id = (value.get("id"))
    )
  }

  setValuesToComponent(id:string){
    const result = dataFake.filter(
                   article=> article.id.toString() == id
  )

    this.contentTitle = result.title

  }
}
