import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-character-details",
  templateUrl: "./character-details.component.html",
  styleUrls: ["./character-details.component.sass"],
})
export class CharacterDetailsComponent implements OnInit {
  datas: any;
  showDetails = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const name = params["name"];
      if (name) {
        this.showDetails = true;
      }
      this.getData(name);
    });
  }

  getData(name: string) {
    this.dataService
      .getData()
      .pipe(
        map((data) => data.results),
        map((results) =>
          results.find(
            (singleData: { name: string }) =>
              singleData.name.split(" ").join("") === name.split(" ").join("")
          )
        )
      )
      .subscribe((data) => {
        this.datas = data;
        console.log(this.datas);
      });
  }
}
