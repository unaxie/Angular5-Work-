import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  @Input("data") todos = [];
  @Output() removeEvent = new EventEmitter<number>();

  filterType = 'All';
  @Output() filterTypeEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
  ngOnChang() {
    console.log("變了變了");
    // 回家繼續做
  }
  clearBtn() {
    this.removeEvent.emit();
    // console.log(this.todos);
  }
  changefilterType(type) {
    this.filterType = type;
    this.filterTypeEvent.emit(type);
  }
}
