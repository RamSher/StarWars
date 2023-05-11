import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit {
  datas: any[] = [];
  newData: any[] = [];
  itemsPerPage = 1; // Number of characters to display per page
  currentPage = 1; // Current page number
  totalPages = 1; // Total number of pages

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService
      .getData()
      .pipe(map((data) => data.results))
      .subscribe((results) => {
        this.datas = results;
        this.totalPages = Math.ceil(this.datas.length / this.itemsPerPage);
        this.updatePagination();
      });
  }

  updatePagination() {
    this.newData = this.datas.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }
}
