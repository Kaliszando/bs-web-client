import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {

  @Input()
  style: 'initials' | 'thumbs' | 'bottts' = 'initials';

  @Input()
  seed: string = '';

  @Input()
  size: number = 25;

  @Input()
  radius: number = 10;

  @Input()
  firstName?: string;

  @Input()
  lastName?: string;

  isInitial(): boolean {
    return this.style === 'initials' && (!!this.firstName || !!this.lastName)
  }

  createInitalsSeed(): string {
    return this.firstName?.charAt(0) + '' + this.lastName?.charAt(0);
  }
}

