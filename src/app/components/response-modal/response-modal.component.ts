import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ResponseModal } from 'src/app/utility/response-modal';

@Component({
  selector: 'app-response-modal',
  templateUrl: './response-modal.component.html',
  styleUrls: ['./response-modal.component.css']
})

export class ResponseModalComponent implements OnInit, OnChanges {
  @Input() activeModal?: ResponseModal;

  constructor() { }

  ngOnInit(): void {
    this.activeModal = null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  closeModal(): void {
    this.activeModal = null;
  }
}
