import { Component } from '@angular/core';
import { User } from '../../user';
import { CommonModule, NgClass } from '@angular/common';
import { UserDetailsComponent } from '../../user-details/user-details.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgClass, UserDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users: User[] = [
    { id: 1, name: 'Diego', email: 'test', status: true },
    { id: 2, name: 'Amanda', email: 'test', status: true },
    { id: 3, name: 'Paulo', email: 'test', status: false },
    { id: 4, name: 'Italo', email: 'test', status: false },
    { id: 5, name: 'Carla', email: 'test', status: false },
    { id: 6, name: 'Gabriel', email: 'test', status: true },
    { id: 7, name: 'Maria', email: 'test', status: true },
  ];

  selectedUserId: number | null = null;

  toggleDetails(userId: number) {
    this.selectedUserId = this.selectedUserId === userId ? null : userId;
  }
  selectUser(userId: number) {
    this.selectedUserId = this.selectedUserId === userId ? null : userId;
  }
}
