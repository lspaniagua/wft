import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string;

  @Output() onClose: EventEmitter<void>;

  constructor(private el: ElementRef) {
    this.title = '';
    this.onClose = new EventEmitter<void>();
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    this.close();

    this.el.nativeElement.addEventListener('click', (e: any) => {
      if (e.target.className === 'modal') {
        this.close();
      }
    });
  }

  open(): void {
    this.el.nativeElement.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  close(): void {
    this.el.nativeElement.style.display = 'none';
    document.body.classList.remove('modal-open');
    this.onClose.emit();
  }

}
