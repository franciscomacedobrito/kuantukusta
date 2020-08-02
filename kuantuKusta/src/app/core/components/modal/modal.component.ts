import {AfterViewInit, Component, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import {BagItem} from "../../interfaces/bag-item.interface";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  @Output() confirmButtonClicked = new EventEmitter();
  @Input() bagItem: BagItem;
  @ViewChild('confirmButton') confirmButton;

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.confirmButtonClicked.emit();
  }

  ngAfterViewInit(): void {
    this.confirmButton.nativeElement.focus();
  }

  handleConfirmButtonClicked() {
    this.confirmButtonClicked.emit();
  }

  handleBackDropClicked() {
    this.confirmButtonClicked.emit();
  }
}
