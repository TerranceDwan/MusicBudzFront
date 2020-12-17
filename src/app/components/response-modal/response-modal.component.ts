import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ResponseModal } from 'src/app/utility/response-modal';

@Component({
  selector: 'app-response-modal',
  templateUrl: './response-modal.component.html',
  styleUrls: ['./response-modal.component.css'],
  animations: [
    trigger('openCloseModal', [
      state('open', style({
        opacity: '*',
        top: '*'
      })),
      state('closed', style({
        opacity: 0,
        top: -50
      })),
      transition('closed => open', [
        animate('0.5s ease')
      ])
    ])
  ]
})

export class ResponseModalComponent implements OnInit, OnChanges {
  @Input() activeModal?: ResponseModal;

  thumbsUpURL: string;
  thumbsDownURL: string;
  crossURL: string;

  constructor() { }

  ngOnInit(): void {
    this.activeModal = null;
    
    this.thumbsUpURL = "assets/images/icons/thumbs_up_icon_48px.png";
    this.thumbsDownURL = "assets/images/icons/thumbs_down_icon_48px.png";
    this.crossURL = "assets/images/icons/x_icon_48px.png";
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  closeModal(): void {
    this.activeModal = null;
  }
}
